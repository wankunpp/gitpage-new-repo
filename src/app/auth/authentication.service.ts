import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { User } from './user/user.model';


 
@Injectable()
export class AuthenticationService {
    loggedIn=false;
    StatusChanged= new Subject<boolean>();
    activeUser : User=new User(0,'','');
    UserChanged = new Subject<User>();

    constructor() { }
    
    isAuthenticated(){
       const promise = new Promise(
           (resolve,reject)=>{
               setTimeout(
                   ()=>{
                       resolve(this.loggedIn)
                   },800);
           }
       )
       return promise;
    }

    login(){
        this.loggedIn = true;
        this.StatusChanged.next(this.loggedIn);
    }
    
    logout(){
        this.loggedIn= false;
        this.StatusChanged.next(this.loggedIn);
    }

    setActiveUser(user:User){
        this.activeUser = user;
        this.UserChanged.next(this.activeUser);
    }

   
}