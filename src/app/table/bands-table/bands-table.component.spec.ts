import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandsTableComponent } from './bands-table.component';

describe('BandsTableComponent', () => {
  let component: BandsTableComponent;
  let fixture: ComponentFixture<BandsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
