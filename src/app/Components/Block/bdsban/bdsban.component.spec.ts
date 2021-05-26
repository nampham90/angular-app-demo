import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BDSBanComponent } from './bdsban.component';

describe('BDSBanComponent', () => {
  let component: BDSBanComponent;
  let fixture: ComponentFixture<BDSBanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BDSBanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BDSBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
