import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAdminDeleteComponent } from './restaurant-admin-delete.component';

describe('RestaurantAdminDeleteComponent', () => {
  let component: RestaurantAdminDeleteComponent;
  let fixture: ComponentFixture<RestaurantAdminDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantAdminDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantAdminDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
