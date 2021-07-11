import { fakeAsync, TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getData should return object', fakeAsync(() => {
    let capturedValue: any = {};
    service.getData().subscribe(value => {
      capturedValue = value;
    });
  }));


  it('setdata should take object', () => {
    const message = {
      "categoryCode": '#ff0000',
      "dates": {
        "valueDate": new Date().getTime()
      },
      "transaction": {
        "amountCurrency": {
          "amount": 200,
          "currencyCode": "EUR"
        },
        "type": "Salaries",
        "creditDebitIndicator": "DBIT"
      },
      "merchant": {
        "name": 'toaccount',
        "accountNumber": "SI64397745065188826"
      }
    }
    service.setData(message);
  });
});
