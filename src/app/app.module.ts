import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
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
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
