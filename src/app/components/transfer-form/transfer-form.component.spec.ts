import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFormComponent } from './transfer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('TransferFormComponent', () => {
  let component: TransferFormComponent;
  let fixture: ComponentFixture<TransferFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferFormComponent],
      imports: [FormsModule, ReactiveFormsModule],

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
