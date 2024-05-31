import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstodoComponent } from './userstodo.component';

describe('UserstodoComponent', () => {
  let component: UserstodoComponent;
  let fixture: ComponentFixture<UserstodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserstodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserstodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
