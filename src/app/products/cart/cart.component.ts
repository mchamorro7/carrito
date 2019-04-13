import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() 
  choices: Item[]; 

  private total: number = 0;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    
  }

  //Método para remover el producto del carrito
  remove(i: Item):void{
    this.choices.splice(this.choices.indexOf(i),1);
  }

  /*getTotal(n: number):void{
    console.log("entro aca");
    this.total=this.total+n;
  }*/
}