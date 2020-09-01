import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserData } from '../../interfaces/User';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private authenticatedSource: BehaviorSubject<UserData> = new BehaviorSubject<UserData>(null);
  private authenticated = this.authenticatedSource.asObservable();

  constructor(private angularAuth: AngularFireAuth) {
    // check auth status
    angularAuth.authState.subscribe((user: User) => {
      if (user) {
        this.setAuth(this.fromFirebaseUser(user, true));
      }
      else {
        this.setAuth(null);
      }
    })
  }

  getAuthStatus(): Observable<UserData> {
    return this.authenticated;
  }
  // functions

  async registerWithEmailAndPassword(email: string, password: string, displayName: string) {

    try {

      const auth = await this.angularAuth.createUserWithEmailAndPassword(email, password); // register

      const updated = await auth.user.updateProfile({
        displayName: displayName
      }) // set displayname

      const user = await this.fromFirebaseUser(auth.user, true);

      this.setAuth(user)

    }
    catch (err) {
      console.log(err);

    }
  }

  async loginWithEmailAndPassword(email: string, password: string) {
    try {

      const auth = await this.angularAuth.signInWithEmailAndPassword(email, password); // signin

      const user = await this.fromFirebaseUser(auth.user, true);

      this.setAuth(user)

    }
    catch (err) {
      console.log(err);
    }
  }


  async signOut() {
    this.angularAuth.signOut();
  }

  // utility functions
  private setAuth(authUserData: UserData) {
    this.authenticatedSource.next(authUserData);
  }

  // TODO: Need fixes
  private fromFirebaseUser(fbUserData: User, authState: boolean) {
    const user: UserData = {
      displayName: fbUserData.displayName,
      authenticated: authState,
      userId: fbUserData.uid
    }

    return user;
  }
}