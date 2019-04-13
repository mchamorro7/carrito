import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() choices: Item[];

  constructor() { }

  ngOnInit() {
    
  }

  //Método para remover el producto del carrito
  remove(i: Item){
    this.choices.splice(this.choices.indexOf(i),1);
  }
}