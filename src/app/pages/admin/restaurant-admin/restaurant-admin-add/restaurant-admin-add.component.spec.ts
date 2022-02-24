import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAdminAddComponent } from './restaurant-admin-add.component';

describe('RestaurantAdminAddComponent', () => {
  let component: RestaurantAdminAddComponent;
  let fixture: ComponentFixture<RestaurantAdminAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantAdminAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantAdminAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
