import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userEmail: string;
  password: string;

  constructor(private authSerice: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.userEmail)
    this.authSerice.loginWithEmailAndPassword(this.userEmail, this.password);
  }

}
