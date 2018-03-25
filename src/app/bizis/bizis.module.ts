import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiziListComponent } from './bizi-list/bizi-list.component';
import { BiziListResolve } from './bizi-list.resolve';
import { BiziService } from './bizi.service';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Routes } from '@angular/router';
import { BiziMapComponent } from './bizi-map/bizi-map.component';
import { NguiMapModule} from '@ngui/map';

export const routes: Routes = [
  {
    path: 'bizi/list',
    component: BiziListComponent,
    resolve: {
      biziList: BiziListResolve
    }
  },
  {
    path: 'bizi/map',
    component: BiziMapComponent,
    resolve: {
      biziList: BiziListResolve
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    NgbModule,
    NguiMapModule
  ],
  declarations: [
    BiziListComponent, BiziMapComponent
   ],
  providers: [
    BiziService,
    BiziListResolve
   ]
})
export class BizisModule { }
