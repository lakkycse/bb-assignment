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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FilterComponent,
    TransactionItemComponent,
    SubmitButtonComponent,
    LogoComponent,
    TransactionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
