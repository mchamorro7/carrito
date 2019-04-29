import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';

import { ItemListComponent } from './products/item-list/item-list.component';
import { ScartComponent } from './scart/scart.component';
import { CommunicationService } from './communication.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing,
    HttpClientModule],
  declarations: [ AppComponent, ProductsComponent, AboutComponent,  ItemListComponent, ScartComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService, appRoutingProviders, CommunicationService]
})
export class AppModule { }
