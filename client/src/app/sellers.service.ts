import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/rx';

export interface Seller {
  id: number;
  name: string;
  category: string;
  imagePath: string;
}

export interface SellerProduct {
  id: number;
  name: string;
  price: number;
  quantitySold: number;
  quantityInStock: number;
  imagePath: string;
}

//export interface SellerDetails {
  //kannski seinna?
//}

@Injectable()
export class SellersService {

  constructor(private http: Http) { }

  getSellers(): Observable<Seller[]> {
    return this.http.get("http://localhost:5000/api/sellers")
    .map(response => {
      return <Seller[]> response.json();
    });
  }

  getSellerById(id: number) : Observable<Seller> {
    return this.http.get(`http://localhost:5000/api/sellers/${id}`)
    .map(response => {
      return <Seller> response.json();
    });
  }

  getSellerProduct(id: number) : Observable<SellerProduct[]> {
    return this.http.get(`http://localhost:5000/api/sellers/${id}/products`)
    .map(response => {
      return <SellerProduct[]> response.json();
    });
  }

  addAndEditSeller(newSeller: Seller) : Observable<Seller> {
    if(newSeller.id !== undefined) {
      return this.http.post(`http://localhost:5000//api/sellers/${newSeller.id}`, newSeller)
      .map(response => {
        return <Seller> response.json();
      });
    }
    else {
      return this.http.post(`http://localhost:5000//api/sellers`, newSeller)
      .map(response => {
        return <Seller> response.json();
      });
    }
  }

}
