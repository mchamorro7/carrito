import { Component, OnDestroy } from '@angular/core';
import {CommunicationService} from './communication.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnDestroy {
  name = 'Carrito de compras';
  cantidadCarrito = 0;
  subscription: Subscription;

  constructor(private comService: CommunicationService){
    this.subscription= this.comService.inCart$.subscribe(items=>this.cantidadCarrito=items.length);
  
  };

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  
}
