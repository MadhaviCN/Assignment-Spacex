import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpclient: HttpClient) { }


  /**
   * Service to get the products from DB
   *
   * returns
   * memberof ProductsService
   */
  public getProducts() {
    return this.httpclient.get('https://api.spacexdata.com/v3/launches?limit=100')
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  public getLaunchDetails() {
    return this.httpclient.get('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true')
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  public getLandingDetails() {
    return this.httpclient.get('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true')
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }
}
