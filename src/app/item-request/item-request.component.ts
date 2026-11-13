import { Component } from '@angular/core';
import { ItemRequest } from '../models/item-request';
import { ItemrequestService } from '../services/itemrequest.service';

@Component({
  selector: 'app-item-request',
  templateUrl: './item-request.component.html',
  styleUrls: ['./item-request.component.css']
})
export class ItemRequestComponent {
  displayedColumns: string[] = ['dateOfDelivery', 'customerName', 'customerEmail', 'customerPhone', 'itemName','street','city'];
  itemRequests: ItemRequest[] = [];
  constructor(private itemRequestService:ItemrequestService) { }

  ngOnInit(): void {
    this.itemRequestService.getAllItemRequest().subscribe({
      next: data => {
        this.itemRequests = data;
      },
      error: err => {
        alert(err);
      }
    });
  }

  refresh(){
    window.location.reload();
  }
}
