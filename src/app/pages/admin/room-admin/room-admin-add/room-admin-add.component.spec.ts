import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAdminAddComponent } from './room-admin-add.component';

describe('RoomAdminAddComponent', () => {
  let component: RoomAdminAddComponent;
  let fixture: ComponentFixture<RoomAdminAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomAdminAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomAdminAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
