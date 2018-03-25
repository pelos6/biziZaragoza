import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { ArticlesModule } from './articles/articles.module';
import { BizisModule } from './bizis/bizis.module';
import { RoutingModule } from './routing/routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,
         ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './app.interceptor';
import { NguiMapModule} from '@ngui/map';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';

import {
  RouterModule,
  Routes
} from '@angular/router';

const routes: Routes = [];

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HomeModule,
    ArticlesModule,
    BizisModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyB4oedPRhagjLwa6hK4z1Z_xXrdDNdS92Q'})
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
