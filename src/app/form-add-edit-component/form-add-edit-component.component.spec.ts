import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddEditComponentComponent } from './form-add-edit-component.component';

describe('FormAddEditComponentComponent', () => {
  let component: FormAddEditComponentComponent;
  let fixture: ComponentFixture<FormAddEditComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAddEditComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAddEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
