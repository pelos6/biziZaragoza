import { Component, OnInit } from '@angular/core';
import { Bizi } from '../bizi.model';
import { BiziService } from '../bizi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bizi-list',
  templateUrl: './bizi-list.component.html',
  styleUrls: ['./bizi-list.component.css']
})
export class BiziListComponent implements OnInit {
  page: number = 1;
  data: Bizi[];
  constructor(private biziService: BiziService, private route: ActivatedRoute) {
    this.data = this.route.snapshot.data['biziList'];
  }

  ngOnInit() {
    /*
    this.biziService.getList().subscribe((res: Bizi[]) => {
      this.data = res;
    });*/
  }

}
