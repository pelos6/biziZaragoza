import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { Routes } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { AuthGuard } from '../auth/auth.guard';
import { ArticlesService } from './articles.service';
import { ArticleListResolve} from './articles-list.resolve';


export const routes: Routes = [
  {
    path: 'article/list',
    component: ArticlesListComponent,
    canActivate: [AuthGuard],
    resolve: {
      articleList: ArticleListResolve
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    AuthModule
  ],
  declarations: [
    ArticlesListComponent
  ],
  providers: [
    ArticlesService,
    ArticleListResolve
  ]
})
export class ArticlesModule { }
