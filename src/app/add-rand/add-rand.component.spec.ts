import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRandComponent } from './add-rand.component';

describe('AddRandComponent', () => {
  let component: AddRandComponent;
  let fixture: ComponentFixture<AddRandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
