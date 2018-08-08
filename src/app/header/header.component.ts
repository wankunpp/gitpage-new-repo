import { Component, OnInit, HostListener, OnDestroy, } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { Subject } from 'rxjs/Subject';
import { User } from '../auth/user/user.model';
import { Subscription } from 'rxjs/Subscription';

declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent implements OnInit ,OnDestroy{
  
  isLoggin :boolean;
  activeUser:User ;
  statusSubscription:Subscription;
  userSubscription:Subscription;
  
  

  constructor(private authService:AuthenticationService) {
    
   }

  ngOnInit() {
    this.isLoggin=this.authService.loggedIn;
    this.activeUser = this.authService.activeUser;
    this.statusSubscription=this.authService.StatusChanged.subscribe(
      (isloggedin)=>{
        this.isLoggin = isloggedin;
      });
    this.userSubscription = this.authService.UserChanged.subscribe(
      (user:User)=>{
        this.activeUser = user;
      });

    $('#dropdown-services').hover(function(){
      $('#dropdown-menu-services').slideDown("fast");
      }, function (){
        $('#dropdown-menu-services').slideUp("fast");
      })
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset
    if(scrollPosition > 30) return 'white';
  }

  logout(){
    this.authService.logout();
    this.authService.StatusChanged.next(this.authService.loggedIn);
  }
 
  ngOnDestroy(){
    this.statusSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

}
