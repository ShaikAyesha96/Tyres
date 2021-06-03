import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTyresComponent } from './add-tyres.component';

describe('AddTyresComponent', () => {
  let component: AddTyresComponent;
  let fixture: ComponentFixture<AddTyresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTyresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTyresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
