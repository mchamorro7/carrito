import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ScartComponent } from './scart/scart.component';

const appRoutes: Routes = [
    {path: '', component: AboutComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'cart', component: ScartComponent}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);