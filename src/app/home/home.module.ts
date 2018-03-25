import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TranslateModule } from '@ngx-translate/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
