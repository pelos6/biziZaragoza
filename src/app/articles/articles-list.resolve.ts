import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ArticlesService } from './articles.service';
import { Article } from './article.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArticleListResolve implements Resolve<Article>{

    constructor(private articleService: ArticlesService) {}

    resolve(): Observable<any> {
        return this.articleService.getList();
    }
}
