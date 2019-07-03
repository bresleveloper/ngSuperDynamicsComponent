import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigEditComponent } from './big-edit.component';

describe('BigEditComponent', () => {
  let component: BigEditComponent;
  let fixture: ComponentFixture<BigEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
