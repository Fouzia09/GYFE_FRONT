import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAdminEditComponent } from './restaurant-admin-edit.component';

describe('RestaurantAdminEditComponent', () => {
  let component: RestaurantAdminEditComponent;
  let fixture: ComponentFixture<RestaurantAdminEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantAdminEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
