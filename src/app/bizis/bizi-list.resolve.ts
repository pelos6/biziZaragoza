import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { BiziService } from './bizi.service';
import { Bizi } from './bizi.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BiziListResolve implements Resolve<Bizi>{

    constructor(private biziService: BiziService) {}

    resolve(): Observable<any> {
        return this.biziService.getList();
    }
}
