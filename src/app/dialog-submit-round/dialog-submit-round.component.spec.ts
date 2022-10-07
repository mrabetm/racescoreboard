import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSubmitRoundComponent } from './dialog-submit-round.component';

describe('DialogSubmitRoundComponent', () => {
  let component: DialogSubmitRoundComponent;
  let fixture: ComponentFixture<DialogSubmitRoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSubmitRoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSubmitRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
