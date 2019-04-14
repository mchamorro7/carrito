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
  @Input() 
  cant: number; 

  private total: number = 0;
  private subtotal: number=0;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    this.total=0;
    this.choices.forEach((x:Item)=>{
      this.total=this.total+x.price*x.qty;
    });
  }


  //Método para remover el producto del carrito
  remove(i: Item):void{
    this.choices.splice(this.choices.indexOf(i),1);
    this.total=this.total-i.price*i.qty;
  }

  /*getTotal(n: number):void{
    console.log("entro aca");
    this.total=this.total+n;
  }*/
}