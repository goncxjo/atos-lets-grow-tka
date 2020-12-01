import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanditatesListComponent } from './canditates-list.component';

describe('CanditatesListComponent', () => {
  let component: CanditatesListComponent;
  let fixture: ComponentFixture<CanditatesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanditatesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanditatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
