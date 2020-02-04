import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastaAndPizzaComponent } from './pasta-and-pizza.component';

describe('PastaAndPizzaComponent', () => {
  let component: PastaAndPizzaComponent;
  let fixture: ComponentFixture<PastaAndPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastaAndPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastaAndPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
