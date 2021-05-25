import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBandDialogComponent } from './new-band-dialog.component';

describe('NewBandDialogComponent', () => {
  let component: NewBandDialogComponent;
  let fixture: ComponentFixture<NewBandDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBandDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBandDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
