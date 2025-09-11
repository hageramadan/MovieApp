import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserCredtionalI } from '../../shared/user-credtional-i';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class login {
  user = {
    username: '',
    password: '',
    // أو تقدر تستخدم حساب موجود
    // username: 'mohamedyasser@Dax0r',
    // password: 'تعسف ةغ فهةث@12042002',
  };

  apiKey: string = '9c3434f97dd081062d3f2e64eb7945f7';

  constructor(private http: HttpClient, public userCredtional: UserCredtionalI) {}

  login() {
   
    this.http.get<any>(`https://api.themoviedb.org/3/authentication/token/new?api_key=${this.apiKey}`)
      .subscribe({
        next: (tokenRes) => {
          const requestToken = tokenRes.request_token;

        
          const loginPayload = {
            username: this.user.username,
            password: this.user.password,
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

                  this.userCredtional.sessionId = sessionId;
                  localStorage.setItem('tmdb_session_id', sessionId);

                 
                  this.http.get<any>(
                    `https://api.themoviedb.org/3/account?api_key=${this.apiKey}&session_id=${sessionId}`
                  ).subscribe({
                    next: (accountRes) => {
                      this.userCredtional.accountId = accountRes.id;

                      alert(
                        `تسجيل الدخول ناجح!\n\n
                         اسم المستخدم: ${accountRes.username}\n
                         رقم الحساب: ${this.userCredtional.accountId}\n
                        كل تفاصيل الحساب \n ${accountRes.name}\n${accountRes.iso_3166_1}`
                      );

                      console.log('Session ID:', sessionId);
                      console.log('Account Info:', accountRes);
                    },
                    error: (err) => {
                      console.error(' فشل في جلب بيانات المستخدم:', err);
                      alert('تم تسجيل الدخول، لكن فشل في جلب بيانات الحساب');
                    }
                  });
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
          console.error(' فشل الحصول على request token:', err);
          alert('حدث خطأ أثناء التحضير لتسجيل الدخول');
        }
      });
  }
}
