import { Component, Input } from '@angular/core';
import { Items } from '../models/items';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
items:Items[]=[];
constructor(private itemService:ItemsService){}

ngOnInit(): void {
this.fetchItems();
}

fetchItems(){
  this.itemService.getItems().subscribe({
    next: data => {
      this.items = data;
    },
    error: e => {
      alert("Network Error !! Please Try Again Later");
    }
  });
}

onSearchText(searchVal: string) {
  if (searchVal === '' || !searchVal)
    {
     this.fetchItems();
    }
  else {
    this.itemService.getItems().subscribe(
      (items)=>{
        this.items = items.filter(item => item.itemName?.toLowerCase().startsWith(searchVal.toLowerCase())
        // || item.category?.toLowerCase().startsWith(searchVal)
        );
      },
      (error)=>{
        alert('Failed to Fetch Notes Due to Server Error!!')
      }
    );
    
  }
}

searchChip(chipVal:any){
if(chipVal==='' || !chipVal){
  this.fetchItems();
}
else{
  this.itemService.getItems().subscribe(
    data => {
     this.items= data.filter(item=>item.category?.includes(chipVal))
    }
  )
}
}
}
