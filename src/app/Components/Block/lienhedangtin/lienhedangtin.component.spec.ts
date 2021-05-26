import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienhedangtinComponent } from './lienhedangtin.component';

describe('LienhedangtinComponent', () => {
  let component: LienhedangtinComponent;
  let fixture: ComponentFixture<LienhedangtinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LienhedangtinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LienhedangtinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
