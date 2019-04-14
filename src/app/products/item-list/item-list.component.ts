import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Item} from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() product: Item;

  @Output() messageEvent1= new EventEmitter<number>();
  @Output() messageEvent2= new EventEmitter<Item>();

  public cantidad: number=0;

  constructor() { }

  ngOnInit() {
  }



  sendData(c: number){
    console.log("cantidad="+c);
    this.cantidad=c;
    this.messageEvent1.emit(this.cantidad);
    this.messageEvent2.emit(this.product);
  }
}