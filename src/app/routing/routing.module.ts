import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routes as homeRoutes } from '../home/home.module';
import { routes as biziRoutes } from '../bizis/bizis.module';
import { routes as articleRoutes } from '../articles/articles.module';
import { routes as authRoutes } from '../auth/auth.module';

let routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'}
];
routes = routes.concat(homeRoutes);
routes = routes.concat(biziRoutes);
routes = routes.concat(articleRoutes);
routes = routes.concat(authRoutes);

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
