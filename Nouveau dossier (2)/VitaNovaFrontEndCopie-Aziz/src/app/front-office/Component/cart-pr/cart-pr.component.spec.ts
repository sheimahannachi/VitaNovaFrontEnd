import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPrComponent } from './cart-pr.component';

describe('CartPrComponent', () => {
  let component: CartPrComponent;
  let fixture: ComponentFixture<CartPrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
