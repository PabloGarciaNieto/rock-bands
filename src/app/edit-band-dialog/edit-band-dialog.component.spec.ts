import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBandDialogComponent } from './edit-band-dialog.component';

describe('EditBandDialogComponent', () => {
  let component: EditBandDialogComponent;
  let fixture: ComponentFixture<EditBandDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBandDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBandDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
