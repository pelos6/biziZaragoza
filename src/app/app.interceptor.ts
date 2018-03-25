import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<HttpEventType.Response>> {
    if (req.url.indexOf('zaragoza.es')>0) {
      return next.handle(req);
    } else {
      if (localStorage.getItem('token')) {
        const authReq = req.clone({
          setHeaders: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return next.handle(authReq);
      } else {
        return next.handle(req);
      }
    }
  }

}
