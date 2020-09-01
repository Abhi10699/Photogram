import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth-service.service';
import { UserData } from "../../interfaces/User";
import { timestamp } from 'rxjs/operators';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  // initially null
  user: navbarUserData = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getAuthStatus().subscribe((user: UserData) => {
      if (user) {
        const authUser: navbarUserData = {
          displayName: user.displayName,
          authenticated: user.authenticated
        }
        this.user = authUser;
      }
    })
  }

  signOut() {
    this.authService.signOut();
  }
}

interface navbarUserData {
  displayName: string,
  authenticated: boolean
}
