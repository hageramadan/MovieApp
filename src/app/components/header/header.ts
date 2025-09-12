import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ThemeService } from '../../shared/theme-service';
import { CommonModule } from '@angular/common';
import { WatchlistCounter } from '../../shared/watchlist-counter';
import { AccountDetailsI } from '../../models/account-details-i';
import { AccountS } from '../../shared/account-s';
import { UserCredtionalI } from '../../shared/user-credtional-i';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header implements OnInit, OnDestroy {
  public account: AccountDetailsI | null = null;
  public isLoggedIn = false;
  public isLoading = true;
  public count = 0;

  private subscription = new Subscription();

  constructor(
    private theme: ThemeService,
    private counterService: WatchlistCounter,
    private accountService: AccountS,
    private userCredtional: UserCredtionalI,
    private router: Router
  ) {}

  ngOnInit() {
    // ✅ متابعة حالة تسجيل الدخول من السيرفيس
    this.subscription.add(
      this.userCredtional.sessionId$.subscribe((sessionId) => {
        this.isLoggedIn = !!sessionId;
      })
    );

    // ✅ متابعة عدد الـ watchlist
    this.subscription.add(
      this.counterService.count$.subscribe((val) => {
        this.count = val;
      })
    );

    // ✅ جلب بيانات الحساب
    this.subscription.add(
      this.accountService.getAccountDetails().subscribe({
        next: (account) => {
          this.account = account;
          this.isLoading = false;
         
        },
        error: (error) => {
     
          this.isLoading = false;
        },
      })
    );
  }

  logout(): void {
    this.userCredtional.clearCredentials(); // Clear credentials
    this.router.navigate(['/login']); // Navigate to login page
  }

  get isDarkMode() {
    return this.theme.isDarkMode();
  }

  toggleTheme() {
    this.theme.toggleTheme();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
