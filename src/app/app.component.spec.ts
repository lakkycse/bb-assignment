import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterComponent } from './components/filter/filter.component';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { LogoComponent } from './components/logo/logo.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './search-filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        HttpClientModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        FooterComponent,
        FilterComponent,
        TransactionItemComponent,
        SubmitButtonComponent,
        LogoComponent,
        TransactionsListComponent,
        TransferFormComponent,
        SearchFilterPipe
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bb-task'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bb-task');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('bb-task app is running!');
  });
});
