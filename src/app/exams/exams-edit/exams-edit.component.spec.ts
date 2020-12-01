import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsEditComponent } from './exams-edit.component';

describe('ExamsEditComponent', () => {
  let component: ExamsEditComponent;
  let fixture: ComponentFixture<ExamsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
