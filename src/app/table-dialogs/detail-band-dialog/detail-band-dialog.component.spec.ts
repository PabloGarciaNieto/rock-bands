import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBandDialogComponent } from './detail-band-dialog.component';

describe('DetailBandDialogComponent', () => {
  let component: DetailBandDialogComponent;
  let fixture: ComponentFixture<DetailBandDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBandDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBandDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
