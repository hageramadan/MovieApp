import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css'] 
})
export class Login {
  username: string = '';
  password: string = '';
  apiKey: string = '9c3434f97dd081062d3f2e64eb7945f7'; 

  constructor(private http: HttpClient) {}

  loginToTMDB() {
    
    this.http.get<any>(`https://api.themoviedb.org/3/authentication/token/new?api_key=${this.apiKey}`)
      .subscribe({
        next: (tokenRes) => {
          const requestToken = tokenRes.request_token;

        
          const loginPayload = {
            username: this.username,
            password: this.password,
            request_token: requestToken
          };

          this.http.post<any>(
            `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${this.apiKey}`,
            loginPayload
          ).subscribe({
            next: (validateRes) => {
            
              this.http.post<any>(
                `https://api.themoviedb.org/3/authentication/session/new?api_key=${this.apiKey}`,
                { request_token: requestToken }
              ).subscribe({
                next: (sessionRes) => {
                  const sessionId = sessionRes.session_id;
                  localStorage.setItem('tmdb_session_id', sessionId);
                  alert(' تسجيل الدخول ناجح!');
                  console.log('Session ID:', sessionId);
                },
                error: err => {
                  console.error(' خطأ في إنشاء session:', err);
                  alert('فشل إنشاء session');
                }
              });
            },
            error: err => {
              console.error(' بيانات الدخول غير صحيحة:', err);
              alert('بيانات الدخول غير صحيحة');
            }
          });
        },
        error: err => {
          console.error('فشل الحصول على request token:', err);
          alert('حدث خطأ أثناء التحضير لتسجيل الدخول');
        }
      });
  }
}
