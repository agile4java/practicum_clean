import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryNavbarComponent } from './inventory-navbar.component';

describe('InventoryNavbarComponent', () => {
  let component: InventoryNavbarComponent;
  let fixture: ComponentFixture<InventoryNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
