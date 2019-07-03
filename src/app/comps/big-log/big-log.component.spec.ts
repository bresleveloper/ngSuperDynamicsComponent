import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigLogComponent } from './big-log.component';

describe('BigLogComponent', () => {
  let component: BigLogComponent;
  let fixture: ComponentFixture<BigLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
