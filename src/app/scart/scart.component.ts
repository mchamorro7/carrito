import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../communication.service';

@Component({
  selector: 'app-scart',
  templateUrl: './scart.component.html',
  styleUrls: ['./scart.component.css']
})
export class ScartComponent implements OnInit {
  private choices =[];
  constructor(private c: CommunicationService) { }

  ngOnInit() {
    this.c.currentMessage.subscribe(message => this.choices = message)
  }

  newMessage() {
    this.c.changeMessage(this.choices);
  }
}