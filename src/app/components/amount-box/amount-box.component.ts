import { Component, OnInit } from '@angular/core';
import { AmountDataModel } from 'src/app/model/amountDataModel';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-amount-box',
  templateUrl: './amount-box.component.html',
  styleUrls: ['./amount-box.component.css']
})
export class AmountBoxComponent implements OnInit{
  
  accountDetails: AmountDataModel = {
    amountValue: 10000,
    limit: 5000,
    totalAmount: 15000
  }

  constructor(private service: AccountsService) {}

  ngOnInit(): void {
    this.getAccountValues();
  }

  getAccountValues() {
    this.service.getAccount().subscribe((data) => {
      this.accountDetails.amountValue = data.amountValue;
      this.accountDetails.limit = data.limit;
      this.accountDetails.totalAmount = data.totalAmount;
    });
  }

}
