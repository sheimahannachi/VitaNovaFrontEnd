import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallenegeComponent } from './challenege.component';

describe('ChallenegeComponent', () => {
  let component: ChallenegeComponent;
  let fixture: ComponentFixture<ChallenegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallenegeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallenegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
