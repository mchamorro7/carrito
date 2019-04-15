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
    this.updateTotal();
  }
  
  updateTotal(){
    this.total=0;
    this.choices.forEach((x:Item)=>{
      this.total=this.total+x.price*x.qty;
    });
  }

  actualizarTotal(i: Item){
    console.log("item con cantidad: ", i);
    this.updateTotal();
  }

  //Método para remover el producto del carrito
  remove(i: Item):void{
    this.choices.splice(this.choices.indexOf(i),1);
    this.total=this.total-i.price*i.qty;
  }

  buy(){
    this.choices.splice(0,this.choices.length);
    this.total=0;
    alert("Compra exitosa!");
  }

}