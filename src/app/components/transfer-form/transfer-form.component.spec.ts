import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferFormComponent } from './transfer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubmitButtonComponent } from '../submit-button/submit-button.component';

describe('TransferFormComponent', () => {
  let component: TransferFormComponent;
  let fixture: ComponentFixture<TransferFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferFormComponent, SubmitButtonComponent],
      imports: [FormsModule, ReactiveFormsModule],

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferFormComponent);
    component = fixture.componentInstance;
    component.ngOnInit()
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set submitted to true', () => {
    component.submit(content,form);
    expect(component.submitted).toBeTruthy();
  });
});

function content(content: any, form: any) {
  throw new Error('Function not implemented.');
}
function form(content: (content: any, form: any) => void, form: any) {
  throw new Error('Function not implemented.');
}

