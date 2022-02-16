import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAdminDeleteComponent } from './room-admin-delete.component';

describe('RoomAdminDeleteComponent', () => {
  let component: RoomAdminDeleteComponent;
  let fixture: ComponentFixture<RoomAdminDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomAdminDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomAdminDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
