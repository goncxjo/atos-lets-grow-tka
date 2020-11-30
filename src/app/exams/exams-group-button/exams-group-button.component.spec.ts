import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsGroupButtonComponent } from './exams-group-button.component';

describe('ExamsGroupButtonComponent', () => {
  let component: ExamsGroupButtonComponent;
  let fixture: ComponentFixture<ExamsGroupButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamsGroupButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsGroupButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
