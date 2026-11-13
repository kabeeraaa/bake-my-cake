import { Component } from '@angular/core';
import { Items } from '../models/items';
import { ItemRequest } from '../models/item-request';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ItemsService } from '../services/items.service';
import { ItemrequestService } from '../services/itemrequest.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
items?:Items;
itemRequest:ItemRequest={};
submitStatus:boolean=false;
readonly today = new Date();
constructor(private activateroute:ActivatedRoute,private itemService:ItemsService,
  private itemRequestService:ItemrequestService,private router:Router,private snackBar:MatSnackBar ){}

  ngOnInit():void{
    this.activateroute.paramMap.subscribe(param=>{
      let id=param.get("id") ?? "";
      this.itemService.getItemsId(id).subscribe(data=>{
        this.items=data;
      })
    })
  }
  


  makeRequest() {
    if (this.itemRequest.customerName && this.itemRequest.customerEmail && this.itemRequest.customerPhone && this.itemRequest.dateOfDelivery) {
      this.itemRequest.itemName = this.items?.itemName;
      this.itemRequestService.saveItemRequest(this.itemRequest).subscribe({
        next: data => {
          this.submitStatus = true;
          this.snackBar.open("Request Submitted", "", {
            duration: 3000
          });
          this.router.navigate([""]);
        },
        error: err => {
          alert(err);
        }
      })
    }
  }

  canDeactivate() {
    if (!this.submitStatus)
        this.submitStatus = confirm("You have not submitted order details. Any details entered will be lost. Are you sure you want to leave?");
    return this.submitStatus;
}
}
