import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  displayName: string
  userEmail: string;
  password: string;
  confirmPassword: string;

  ngOnInit(): void {

  }

  register() {
    console.log(this.userEmail, this.password, this.confirmPassword)
    this.authService.registerWithEmailAndPassword(this.userEmail, this.password, this.displayName);
  }

}
