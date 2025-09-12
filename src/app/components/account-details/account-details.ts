import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AccountDetailsI } from '../../models/account-details-i';
import { AccountS } from '../../shared/account-s';
import { UserCredtionalI } from '../../shared/user-credtional-i';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.html',
  styleUrls: ['./account-details.css'],
  imports: [CommonModule],
})
export class AccountDetails implements OnInit, OnDestroy {
  public account: AccountDetailsI | null = null;
  public isLoading: boolean = true;
  private subscription: Subscription | null = null;

  constructor(
    private accountService: AccountS,
    private userCredtional: UserCredtionalI,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userCredtional.initializeFromStorage(); // Initialize credentials from localStorage
    this.subscription = this.accountService.getAccountDetails().subscribe({
      next: (account) => {
        this.account = account;
        this.isLoading = false;
        console.log('Account details:', account);
      },
      error: (error) => {
        console.error('Error in account details subscription:', error);
        this.isLoading = false;
      }
    });
  }

  logout(): void {
    this.userCredtional.clearCredentials(); // Clear credentials
    this.router.navigate(['/login']); // Navigate to login page
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
