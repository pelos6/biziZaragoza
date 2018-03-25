import { Bizi } from './bizi.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import { Injectable } from '@angular/core';

interface BiziResponse {
  totalCount: number;
  start: number;
  rows: number;
  result: Array<Bizi>
}

@Injectable()
export class BiziService {

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<any> {
    const apiUrl: string = 'http://www.zaragoza.es/api/recurso/urbanismo-infraestructuras/estacion-bicicleta.json';
    let params = new HttpParams();
    params = params.append('rf', 'html');
    params = params.append('results_only', 'false');
    params = params.append('srsname', 'wgs84');
    params = params.append('rows', '1000');

    return this.httpClient.get<BiziResponse>(apiUrl, {params: params})
      //.delay(5000)
      .map(data=>{
        return data.result.map(item=> {
          return new Bizi(item);
        })
    })
  }

}
