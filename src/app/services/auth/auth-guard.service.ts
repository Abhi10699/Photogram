import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth-service.service';
import { UserData } from 'src/app/interfaces/User';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  authenticated: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    // TODO: implement proper guards
    return false;
  }
}
