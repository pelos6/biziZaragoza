import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Article } from './article.model';

interface ArticleResponse {
  count: number;
  rows: Array<Article>;
}

@Injectable()
export class ArticlesService {

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<any> {
    const apiUrl: string = 'http://localhost:9000/api/articles';
    return this.httpClient.get<ArticleResponse>(apiUrl)
      .map(data=>{
        return data.rows.map(item=> {
          return new Article(item);
        })
    })
  }

}
