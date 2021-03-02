import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrawpollsComponent } from './strawpolls.component';

describe('StrawpollsComponent', () => {
  let component: StrawpollsComponent;
  let fixture: ComponentFixture<StrawpollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrawpollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrawpollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
