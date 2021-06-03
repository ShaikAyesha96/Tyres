import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTyresComponent } from './update-tyres.component';

describe('UpdateTyresComponent', () => {
  let component: UpdateTyresComponent;
  let fixture: ComponentFixture<UpdateTyresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTyresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTyresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
