import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsStylesComponent } from './forms-styles.component';

describe('FormsStylesComponent', () => {
  let component: FormsStylesComponent;
  let fixture: ComponentFixture<FormsStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsStylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
