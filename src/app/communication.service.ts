import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from './products/item';

@Injectable()
export class CommunicationService {
  public inCart$ = new BehaviorSubject<Item[]>([]);
  asd = this.inCart$.asObservable();

  private productsInCart: Item[] = [];

  constructor() { }

  changeMessage(message: any[]) {
    this.inCart$.next(message)
  }

  addProductToCart(item: Item){
    this.productsInCart.push(item);
    this.inCart$.next(this.productsInCart);
  }

  removeItemFromCart(item: Item){
    this.productsInCart.splice(this.productsInCart.indexOf(item),1);
    this.inCart$.next(this.productsInCart);
  }
}