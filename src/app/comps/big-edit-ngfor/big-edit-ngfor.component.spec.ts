import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigEditNgforComponent } from './big-edit-ngfor.component';

describe('BigEditNgforComponent', () => {
  let component: BigEditNgforComponent;
  let fixture: ComponentFixture<BigEditNgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigEditNgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigEditNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
