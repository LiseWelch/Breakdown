import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyCompletedComponent } from './recently-completed.component';

describe('RecentlyCompletedComponent', () => {
  let component: RecentlyCompletedComponent;
  let fixture: ComponentFixture<RecentlyCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
