import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : Array<any> = [];

  addToCart(product: any){
    this.items.push(product as any)
  }

  getItems(){
    return this.items
  }

  clearCart(){
    this.items = []
    return this.items
  }  

  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json')
  }

  constructor(
    private http: HttpClient
  ) { }

}