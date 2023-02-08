import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';


export interface AdminproductContext {

}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   * 
   * 
   * 
   */
 
  //  viewCartItems(): Observable<any> {
  //   return this.http.get('/cart/viewcart', { observe: 'response' }).pipe(
  //     map((res: HttpResponse<any>) => {
  //       return res.body;
  //     })
  //   );
  // }
  
}
