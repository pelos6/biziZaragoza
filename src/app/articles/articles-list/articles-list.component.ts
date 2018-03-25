import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article.model';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  data:Article[];

  constructor(private route:ActivatedRoute) {
    this.data = this.route.snapshot.data['articleList'];
  }

  ngOnInit() {
  }

}
