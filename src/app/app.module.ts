import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './products/cart/cart.component';
import { ItemListComponent } from './products/item-list/item-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing,
    HttpClientModule],
  declarations: [ AppComponent, ProductsComponent, AboutComponent, CartComponent, ItemListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService, appRoutingProviders]
})
export class AppModule { }
