import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferFormComponent } from './transfer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubmitButtonComponent } from '../submit-button/submit-button.component';
import { NgbModalModule ,NgbModal} from '@ng-bootstrap/ng-bootstrap';

describe('TransferFormComponent', () => {
  let component: TransferFormComponent;
  let fixture: ComponentFixture<TransferFormComponent>;
  let modalService:NgbModal
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferFormComponent, SubmitButtonComponent],
      imports: [FormsModule, ReactiveFormsModule,NgbModalModule],

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

  it('getDismiss modal reason to be', () => {
    let message=component.getDismissReason(0);
    expect(message).toEqual('by clicking on a backdrop');
    let message1=component.getDismissReason(1);
    expect(message1).toEqual('by pressing ESC');
    let message2=component.getDismissReason('clicked close');
    expect(message2).toEqual('with: clicked close');
  });
});

function content(content: any, form: any) {
  throw new Error('Function not implemented.');
}
function form(content: (content: any, form: any) => void, form: any) {
  throw new Error('Function not implemented.');
}

