import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectUsersComponent } from './add-project-users.component';

describe('AddProjectUsersComponent', () => {
  let component: AddProjectUsersComponent;
  let fixture: ComponentFixture<AddProjectUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
