import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserCredtionalI } from '../../shared/user-credtional-i';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  user = {
    username: '',
    password: '',
  };

  apiKey: string = 'b565283dc7e83e50ea181e7329c96854';
  errorMessage: string = ''; // لتخزين رسالة الخطأ

  constructor(
    private http: HttpClient,
    public userCredtional: UserCredtionalI,
    private router: Router
  ) {}

  login() {
    this.errorMessage = ''; // تفريغ الرسالة القديمة

    if (!this.user.username || !this.user.password) {
      this.errorMessage = 'Username and password are required';
      return;
    }

    this.http
      .get<any>(
        `https://api.themoviedb.org/3/authentication/token/new?api_key=${this.apiKey}`
      )
      .subscribe({
        next: (tokenRes) => {
          const requestToken = tokenRes.request_token;

          const loginPayload = {
            username: this.user.username,
            password: this.user.password,
            request_token: requestToken,
          };

          // Validate login
          this.http
            .post<any>(
              `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${this.apiKey}`,
              loginPayload
            )
            .subscribe({
              next: () => {
                // Create session
                this.http
                  .post<any>(
                    `https://api.themoviedb.org/3/authentication/session/new?api_key=${this.apiKey}`,
                    { request_token: requestToken }
                  )
                  .subscribe({
                    next: (sessionRes) => {
                      const sessionId = sessionRes.session_id;
                      this.userCredtional.setSessionId(sessionId);

                      // Get account details
                      this.http
                        .get<any>(
                          `https://api.themoviedb.org/3/account?api_key=${this.apiKey}&session_id=${sessionId}`
                        )
                        .subscribe({
                          next: (accountRes) => {
                            this.userCredtional.setAccountId(
                              accountRes.id.toString()
                            );
                            console.log('تم تسجيل الدخول بنجاح', accountRes);

                            this.router.navigate(['/']);
                          },
                          error: (err) => {
                            console.error('خطأ في جلب بيانات الحساب:', err);
                            this.errorMessage =
                              'Failed to fetch account details. Try again.';
                          },
                        });
                    },
                    error: () => {
                      this.errorMessage = 'Error creating session. Try again.';
                    },
                  });
              },
              error: () => {
                this.errorMessage = 'Invalid username or password';
              },
            });
        },
        error: () => {
          this.errorMessage = 'Failed to get request token';
        },
      });
  }
}
