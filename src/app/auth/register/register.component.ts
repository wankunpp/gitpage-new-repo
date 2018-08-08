import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { AlertService } from '../alert/alert.service';
import { NgForm } from '@angular/forms';
import { User } from '../user/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  @ViewChild('f') form:NgForm;
  hasUser:boolean = false;

  constructor(private router: Router,
    private userService: UserService,
    ) { }

  ngOnInit() {
  }

  register(){
    const username = this.form.value['username'];
    const password = this.form.value['password'];

    if(this.userService.getUsers().find(
      user=>user.username === username
    )){
      this.hasUser = true;
    }else{
      const id = this.userService.getUsers().length+1;
      this.userService.addUser(new User(id,username,password));
      this.router.navigate(['/login']);
    }

    
  }

}
