import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router,
         RouterEvent,
         NavigationEnd,
         NavigationError,
         NavigationStart,
         NavigationCancel } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public loading: boolean;
  public errorMsg: string;
  public languageForm: FormGroup;

  constructor(private translate: TranslateService,
              private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('es');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('es');
  }

  ngOnInit() {
    this.loading = false;
    this.errorMsg = null;
    this.router.events
      .subscribe((event:RouterEvent)=>
        this._handleNavigationError(event));
    this.languageForm = this.formBuilder.group({
      'lang': 'es'
    });

    this.languageForm.controls.lang
      .valueChanges
      .subscribe((newLang:string)=>this._handleChangeLang(newLang));
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  private _handleChangeLang(newLang:string) {
    this.translate.use(newLang);
  }

  private _handleNavigationError(event: RouterEvent) {
    if (event instanceof NavigationEnd) {
      console.log('NavigationEnd:::', event);
      this.loading = false;
      this.errorMsg = null;
    }

    if (event instanceof NavigationError) {
      console.log('NavigationError:::', event);
      this.loading = false;
      this.errorMsg = 'Error al cargar la página, compruebe su conexión a internet';
    }

    if (event instanceof NavigationStart) {
      console.log('NavigationStart:::', event);
      this.loading = true;
      this.errorMsg = null;
    }

    if (event instanceof NavigationCancel) {
      console.log('NavigationCancel:::', event);
      this.loading = false;
      this.errorMsg = 'Necesita permisos para acceder a ese recurso';
      this.router.navigate(['/login']);
    }

  }

}
