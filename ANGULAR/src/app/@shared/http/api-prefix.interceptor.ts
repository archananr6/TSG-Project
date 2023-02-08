import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

/**
 * Prefixes all requests not starting with `http[s]` with `environment.serverUrl`.
 */
@Injectable({
  providedIn: 'root',
})

export class ApiPrefixInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!/^(http|https):/i.test(request.url)) {
      console.log(environment.serverUrl+request.url);
      const credentialsKey = '_app_cache';
const key= "Bearer"+sessionStorage.getItem(credentialsKey)
      
      request = request.clone({ url: environment.serverUrl + request.url,setHeaders: {
        Authorization: key
      } });
    }
    return next.handle(request);
  }
}
