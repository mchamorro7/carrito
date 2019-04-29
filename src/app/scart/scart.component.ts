import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../communication.service';
import {Item} from '../products/item';


@Component({
  selector: 'app-scart',
  templateUrl: './scart.component.html',
  styleUrls: ['./scart.component.css']
})
export class ScartComponent implements OnInit {
  private choices = [];
  private total: number = 0;

  constructor(private c: CommunicationService) { }

  ngOnInit() {
    this.c.currentMessage.subscribe(message => this.choices = message);
    this.updateTotal();
  }
  
  ngOnChanges(){
    this.updateTotal();
  }

  remove(i: Item){
      this.choices.splice(this.choices.indexOf(i),1);
      this.updateTotal();
  }

  updateTotal(){
    this.total=0;
    this.choices.forEach((x:Item)=>{
      this.total=this.total+x.price*x.qty;
    });
  }

  buy(){
    this.choices.splice(0,this.choices.length);
    alert("Compra exitosa!");
    this.updateTotal();
  }
}