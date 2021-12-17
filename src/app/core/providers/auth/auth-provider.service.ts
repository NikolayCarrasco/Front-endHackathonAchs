import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { HttpService } from '../../services/http/http.service';
import { TokenService } from '../../services/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthProviderService {

  private authenticatedAdmin: boolean;
  private authenticatedPatient: boolean;
  private currentUser: any;

  constructor(
    private httpService: HttpService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.authenticatedAdmin = false;
    this.authenticatedPatient = false;
    this.currentUser = null;

    if (this.tokenService.getRole() === 'admin') {
      this.authenticatedAdmin = true;
    };
  }

  isAuthenticated(ruta: string): boolean {
    if (ruta.trim() === 'admin') { //Admin
      return this.authenticatedAdmin;
    } else {
      if (ruta.trim() === 'user') { //Pacient
        return this.authenticatedPatient;
      };
    };
    return false;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  login(emailRecived: string, passwordRecived: string, opcion: string): Observable<any> {
      return this.httpService.post('/auth/login/admin', {
        email: emailRecived,
        password: passwordRecived
      })
        .pipe(
          tap((data: any) => {
            if ((data.user.role === 'admin')) {
              const token: string = data.access_token;
              this.currentUser = {
                _id: data.user._id,
                role: data.user.role,
                mail: data.user.mail,
              };
              this.tokenService.addRole(this.currentUser.role);
              this.tokenService.addToken(token);
              this.authenticatedAdmin = true;
                this.authenticatedPatient = false;
              this.router.navigate(['/admin']);
            } else {
              throw (this.router.navigate(['visitor/inicio']));
            }
          })
        );
  }

  public logout(): void{
    this.currentUser = null;
    this.authenticatedPatient = false;
    this.authenticatedAdmin = false;
    sessionStorage.removeItem('credentials');
    sessionStorage.removeItem('role');
    this.router.navigate(['visitor/home']);
  }
}