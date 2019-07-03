import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCompComponent } from './ui-comp.component';

describe('UiCompComponent', () => {
  let component: UiCompComponent;
  let fixture: ComponentFixture<UiCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
