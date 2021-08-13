import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsConstructorComponent } from './forms-constructor.component';

describe('FormsConstructorComponent', () => {
  let component: FormsConstructorComponent;
  let fixture: ComponentFixture<FormsConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsConstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
