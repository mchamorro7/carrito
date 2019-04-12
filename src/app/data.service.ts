import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from './products/item'

@Injectable()
export class DataService {

  private _url: string = "http://localhost:3000/data";

  constructor(private http: HttpClient) { }

  getProducts():Observable<Item[]>{
  return this.http.get<Item[]>(this._url);
  }
}