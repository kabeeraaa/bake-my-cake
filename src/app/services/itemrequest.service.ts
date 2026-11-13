import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemRequest } from '../models/item-request';


@Injectable({
  providedIn: 'root'
})
export class ItemrequestService {
  url:string= "http://localhost:3000/cakeRequest";
  constructor(private http:HttpClient) { }
getAllItemRequest():Observable<ItemRequest[]>{
  return this.http.get<ItemRequest[]>(`${this.url}`);
}

saveItemRequest(itemRequest?:ItemRequest): Observable<ItemRequest>{
  return this.http.post<ItemRequest>(`${this.url}`, itemRequest);
}

}
