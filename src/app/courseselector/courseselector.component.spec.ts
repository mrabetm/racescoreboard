import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseselectorComponent } from './courseselector.component';

describe('CourseselectorComponent', () => {
  let component: CourseselectorComponent;
  let fixture: ComponentFixture<CourseselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseselectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
