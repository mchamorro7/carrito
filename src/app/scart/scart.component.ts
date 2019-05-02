import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../communication.service';
import {Item} from '../products/item';


@Component({
  selector: 'app-scart',
  templateUrl: './scart.component.html',
  styleUrls: ['./scart.component.css']
})
export class ScartComponent implements OnInit {
  private productsInCart : Item[] = [];
  private total: number = 0;

  constructor(private c: CommunicationService) { }

  ngOnInit() {
    this.c.inCart$.subscribe(message => {
      this.productsInCart= message;
      this.updateTotal();
    });
  }
  

  remove(i: Item){
      this.c.removeItemFromCart(i);
  }

  updateTotal(){
    this.total=0;
    this.productsInCart.forEach((x:Item)=>{
      this.total=this.total+x.price*x.qty;
    });
  }

  buy(){
    this.productsInCart.splice(0,this.productsInCart.length);
    alert("Compra exitosa!");
    this.updateTotal();
  }
}