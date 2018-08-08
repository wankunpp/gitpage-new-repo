import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private authService:AuthenticationService,private router:Router) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.isAuthenticated().then(
            (authenticated:boolean)=>{
                if(authenticated){
                    return true;
                }else{
                    this.router.navigate(['/login']);
                }
            }
        )   
    }
}