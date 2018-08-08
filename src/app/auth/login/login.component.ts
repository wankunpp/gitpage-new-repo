import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';
import { AuthenticationService } from '../authentication.service';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild('f') form:NgForm;
  users:User[];
  loginFail = false;


  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private userService:UserService,
      private authenticationService: AuthenticationService,
      private alertService: AlertService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.userService.usersChanged.subscribe(
      (users:User[])=>{
        this.users = users;
      }
    )
  }

  login(){
    const username = this.form.value['username'];
    const password = this.form.value['password'];
    if(this.users.find(
      user=> user.username=== username && user.password === password
    )){
      this.loginFail=false;
      this.authenticationService.login();
      this.authenticationService.setActiveUser(new User(0,username,password));
      this.authenticationService.StatusChanged.next(this.authenticationService.loggedIn);
      this.router.navigate(['/']);
    }else{
      this.loginFail = true;
    }
    console.log(this.authenticationService.loggedIn);
  }
}
