import { Component, EventEmitter, Output } from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  textVal:string = "";

  @Output()
  searchText: EventEmitter<string> = new EventEmitter<string>();

  constructor(private itemService:ItemsService){}

  ngOnInit(): void {
      
  }
  searchNote() {
    this.searchText.emit(this.textVal);
  }
  
}
