import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAdminEditComponent } from './room-admin-edit.component';

describe('RoomAdminEditComponent', () => {
  let component: RoomAdminEditComponent;
  let fixture: ComponentFixture<RoomAdminEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomAdminEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
