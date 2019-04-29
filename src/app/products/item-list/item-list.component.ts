import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Item} from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() product: Item;

  @Output() messageEvent2= new EventEmitter<Item>();



  constructor() { }

  ngOnInit() {
  }



  sendData(c: number){
    console.log("cantidad="+c);
    this.product.qty=c;
    this.messageEvent2.emit(this.product);
  }
}