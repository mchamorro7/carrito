import { Component, OnInit} from '@angular/core';
import {Item} from './item';
import {Observable} from 'rxjs';
import {DataService} from '../data.service';
import {ItemListComponent} from './item-list/item-list.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  private products = [];
  private choices = [];
  private seleccionado: Boolean = false;
  private cantidad: number=0;
  //private arrayCantidad=[];
  private sel:Item;
 

  constructor(private _data: DataService) { }

 

  ngOnInit() {
    this._data.getProducts().subscribe((res : any[])=>{
     // console.log(res);
      this.products = res;
  });
  }

  onClick(i:Item, c: number){
    this.choices.forEach((x: Item)=> {
      if(x.id==i.id){
        this.seleccionado=true;
        console.log("Producto ya añadido");
      }
    });
    if(!this.seleccionado){
      console.log(i.id);
      i.qty=c;
      this.choices.push(i);
     // console.log(this.cantidad);
    }
    this.seleccionado=false; 
  }

   receiveMessage1($event){
    this.cantidad=$event;
   // this.arrayCantidad.push(this.cantidad)
  }
  
  receiveMessage2($event){
    this.sel=$event;
    this.onClick(this.sel, this.cantidad);
  }
}