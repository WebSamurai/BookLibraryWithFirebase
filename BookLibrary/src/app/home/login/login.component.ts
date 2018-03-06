import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/Auth.Service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private location: Location) { }

  ngOnInit() {
  }

  GoogleLogin()
   {
    this.authService.LoginWithGoogle()
    if (this.authService.IsUserAuthenticated()) {
      this.router.navigate(["/home"])
    }
  }
  GitHubLogin() {
    this.authService.LoginWithGitHub()

  }
}
