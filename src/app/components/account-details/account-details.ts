import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDetailsI } from '../../models/account-details-i';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.html',
  styleUrls: ['./account-details.css'],
  imports: [CommonModule]
})
export class AccountDetails {
  public account: AccountDetailsI = {
    id: 123456,
    name: "John Doe",
    username: "johndoe123",
    iso_639_1: "en",
    iso_3166_1: "US",
    avatar: {
      gravatar: {
        hash: "d4c5b6a7890f1e2d3c4b5a6f7890e1f2" // Example Gravatar hash
      }
    }
  };
  logout()
  {

  }
  // constructor() {} // Not needed for static data
}
