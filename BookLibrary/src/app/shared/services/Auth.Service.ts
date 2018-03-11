
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from "firebase/app";
@Injectable()
export class AuthService {
    _currentUser: firebase.User;
   private _authenticated: boolean = false;
     _user: Observable<firebase.User>
    constructor(private fireAuth: AngularFireAuth) {
        this.fireAuth.authState.subscribe(auth => {
            if (auth != null) {
                this._user =  fireAuth.authState;
                 fireAuth.authState.subscribe((x)=>{
                     this._authenticated=!!x
                     this._currentUser=x;
                    });
                console.log(this._user);
                this._authenticated = true;
            }
            else{
                console.log("UserIsNotLogin");
                this._authenticated=false
            }
        })

    }
   IsUserAuthenticated():boolean{
       return this._authenticated
   }
GetCurrentUser=()=>this._currentUser;
    LoginWithGoogle() {
        this.fireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }
    LoginWithEmail() {
        this.fireAuth.auth.signInWithPopup(new firebase.auth.EmailAuthProvider())
    }
    LoginWithGitHub() {
        this.fireAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
    }
    LogOut(){
        this.fireAuth.auth.signOut();
    }

}

