import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FbAuthResponse, User } from '../interfaces';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  public error$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  get token(): string {
    const expDate = new Date(localStorage.getItem('fb-token-exp'));
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('fb-token');
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true;
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      );
  }

  logout(): any {
    return this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  setToken(res: FbAuthResponse | null): any {
    if (res) {
      const expData = new Date(new Date().getTime() + +res.expiresIn * 1000);
      localStorage.setItem('fb-token', res.idToken);
      localStorage.setItem('fb-token-exp', expData.toString());
    } else {
      localStorage.clear();
    }
  }

  handleError(error: HttpErrorResponse): any {
    const {message} = error.error.error;
    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('Invalid email');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Invalid password');
        break;
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Not found invalid email');
        break;
    }
    return throwError(error);
  }
}
