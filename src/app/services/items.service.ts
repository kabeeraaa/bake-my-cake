import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Items } from '../models/items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

URL:string="http://localhost:3000/items";

  constructor(private http:HttpClient) { }

  getItems():Observable<Items[]>{
    return this.http.get<Items[]>(this.URL);
  }

  getItemsId(id?: string) : Observable<Items>{
    console.log(id);
    return this.http.get<Items>(`${this.URL}/${id}`);
}
}


