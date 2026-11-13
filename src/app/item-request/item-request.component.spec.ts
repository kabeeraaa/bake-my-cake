import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRequestComponent } from './item-request.component';

describe('ItemRequestComponent', () => {
  let component: ItemRequestComponent;
  let fixture: ComponentFixture<ItemRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemRequestComponent]
    });
    fixture = TestBed.createComponent(ItemRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
