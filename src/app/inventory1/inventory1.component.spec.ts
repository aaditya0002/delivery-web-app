import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inventory1Component } from './inventory1.component';

describe('Inventory1Component', () => {
  let component: Inventory1Component;
  let fixture: ComponentFixture<Inventory1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Inventory1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Inventory1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
