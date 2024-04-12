import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from 'src/app/model/accountDataModel';
import { CadsService } from 'src/app/services/cads.service';

@Component({
	selector: 'app-card-box',
	templateUrl: './card-box.component.html',
	styleUrls: ['./card-box.component.css'],
})
export class CardBoxComponent implements OnInit {
	constructor(private service: CadsService) {}

	accountData: AccountDataModel = {
		name: 'Thompson',
		account: {
			agency: '0000',
			number: '00.000000-0',
		},
		card: {
			limit: 5000,
			number: '5678',
		},
	};

	ngOnInit(): void {
		this.getAccountData();
	}

	getAccountData() {
		this.service.getCard().subscribe((data) => {
      this.accountData.name = data.name;
      this.accountData.account.agency = data.account.agency;
      this.accountData.card.limit = data.card.limit;
      this.accountData.account.number = data.account.number;
      this.accountData.card.number  = data.card.number.split(" ")[3];
    });
	}
}
