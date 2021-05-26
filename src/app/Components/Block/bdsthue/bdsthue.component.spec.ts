import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BDSThueComponent } from './bdsthue.component';

describe('BDSThueComponent', () => {
  let component: BDSThueComponent;
  let fixture: ComponentFixture<BDSThueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BDSThueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BDSThueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
