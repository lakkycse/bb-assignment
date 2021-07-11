import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsListComponent } from './transactions-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from '../../search-filter.pipe';
import { FilterComponent } from '../filter/filter.component';

describe('TransactionsListComponent', () => {
  let component: TransactionsListComponent;
  let fixture: ComponentFixture<TransactionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsListComponent, SearchFilterPipe, FilterComponent],
      imports: [HttpClientModule],

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should give random color', () => {
    expect(component.getRandomColor()).toBe, 'string';
  });
  it('should filter', () => {
    component.transactions1 = [{
      "categoryCode": "#12a580",
      "dates": {
        "valueDate": 1600493600000
      },
      "transaction": {
        "amountCurrency": {
          "amount": 5000,
          "currencyCode": "EUR"
        },
        "type": "Salaries",
        "creditDebitIndicator": "CRDT"
      },
      "merchant": {
        "name": "Backbase",
        "accountNumber": "SI64397745065188826"
      }
    }]
    component.search('back');
    expect(component.transactions.length).toEqual(1);
    component.search('salaries');
    expect(component.transactions.length).toEqual(0);
  });
});
