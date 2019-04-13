import { Component, OnInit } from '@angular/core';
import {Item} from './item';
import {Observable} from 'rxjs'
import {DataService} from '../data.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private products = [];
  private choices = [];
  private seleccionado: any = null;

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.getProducts().subscribe((res : any[])=>{
      console.log(res);
      this.products = res;
  });
  }

  onClick(i:Item){
    console.log(i.id);
    this.choices.push(i); 
  }
}