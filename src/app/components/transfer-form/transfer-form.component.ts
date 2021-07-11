import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from '../../services/shared.service'

@Component({
    selector: 'app-transfer-form',
    templateUrl: './transfer-form.component.html',
    styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent implements OnInit {
    public form!: FormGroup;
    public loading = false;
    public submitted = false;
    modalContent: any
    closeResult = '';

    constructor(
        private formBuilder: FormBuilder, private modalService: NgbModal, private sharedService: SharedService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            fromAccount: ['My Personal Account: € 5970'],
            toAccount: ['', Validators.required],
            amount: ['', Validators.compose([
                Validators.required, Validators.min(1), Validators.max(500)])]
        });
    }

    get f() { return this.form.controls; }

    submit(content: any, form: any) {
        this.submitted = true
        if (this.form.invalid) {
            return;
        }
        this.modalContent = form;

        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
            if (result == 'send') {
                this.sharedService.setData(this.modalContent)
                this.form.reset()
                this.submitted = false
                this.form.patchValue({
                    fromAccount: ['My Personal Account: € 5970'],
                });
                this.form.markAsUntouched();
                this.form.markAsPristine();
                this.form.updateValueAndValidity();
            }

        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}
