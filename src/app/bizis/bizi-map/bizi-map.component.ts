import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BiziService } from '../bizi.service';
import { Bizi } from '../bizi.model';

@Component({
  selector: 'app-bizi-map',
  templateUrl: './bizi-map.component.html',
  styleUrls: ['./bizi-map.component.css']
})
export class BiziMapComponent implements OnInit {

  data: Bizi[];
  constructor(private biziService: BiziService, private route: ActivatedRoute) {
    this.data = this.route.snapshot.data['biziList'];
  }

  ngOnInit() {
  }

}
