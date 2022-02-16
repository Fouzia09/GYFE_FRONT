import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomDeleteComponent } from './admin-room-delete.component';

describe('AdminRoomDeleteComponent', () => {
  let component: AdminRoomDeleteComponent;
  let fixture: ComponentFixture<AdminRoomDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoomDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
