import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PADREComponent } from './padre.component';

describe('PADREComponent', () => {
  let component: PADREComponent;
  let fixture: ComponentFixture<PADREComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PADREComponent]
    });
    fixture = TestBed.createComponent(PADREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
