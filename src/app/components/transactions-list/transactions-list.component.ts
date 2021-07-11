import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SearchFilterPipe } from '../../search-filter.pipe';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {
  transactions: any = [];
  transactions1: any = [];
  searchTerm: string = '';
  result: any = [];

  constructor(private httpClient: HttpClient, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.httpClient.get("assets/mock-data/transactions.json").subscribe(data => {
      this.transactions = data;
      this.transactions = this.transactions.data.sort((a: any, b: any) => {
        return (b.dates.valueDate - a.dates.valueDate);
      });
      this.transactions1 = this.transactions
    })
    this.sharedService.getData().subscribe((data: any) => {
      // do stuff with the data, for example:

      const obj = {
        "categoryCode": this.getRandomColor(),
        "dates": {
          "valueDate": new Date().getTime()
        },
        "transaction": {
          "amountCurrency": {
            "amount": data.text.amount,
            "currencyCode": "EUR"
          },
          "type": "Salaries",
          "creditDebitIndicator": "DBIT"
        },
        "merchant": {
          "name": data.text.toAccount,
          "accountNumber": "SI64397745065188826"
        }
      }
      this.transactions1.splice(0, 0, obj);
      this.transactions1.join()
      this.transactions = this.transactions1
      this.transactions = [...this.transactions]
    });
  }

  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  search(value: string): void {
    this.searchTerm = value
    this.transactions = this.transactions1.filter((val: any) => val.merchant.name.toLowerCase().includes(value));
  }

}
