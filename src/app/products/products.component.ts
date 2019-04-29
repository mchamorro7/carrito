import { Component, OnInit} from '@angular/core';
import {Item} from './item';
import {ItemListComponent} from './item-list/item-list.component';
//Imports de servicios
import {DataService} from '../data.service';
import {CommunicationService} from '../communication.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  private products = [];
  private choices = [];
  private seleccionado: Boolean = false;

 
  private sel:Item;
 

  constructor(private _data: DataService, private c: CommunicationService) { }

 

  ngOnInit() {
    this._data.getProducts().subscribe((res : any[])=>{
     // console.log(res);
      this.products = res;
    });
    this.c.currentMessage.subscribe(message => this.choices = message);
  }
  

  onClick(i:Item){
    console.log(i);
    this.choices.forEach((x: Item)=> {
      if(x.id==i.id){
        this.seleccionado=true;
        console.log("Producto ya añadido");
        alert("The product has already been added to the shopping cart.");
      }
    });
    if(!this.seleccionado){
      console.log(i.id);
      this.choices.push(i);
      this.newMessage();
      console.log("Producto añadido a choices");
    }
    this.seleccionado=false; 
  }
  
  newMessage() {
    this.c.changeMessage(this.choices);
  }

  receiveMessage2($event){
    this.sel=$event;
    console.log("recibe mensaje");
    this.onClick(this.sel);
  }
}