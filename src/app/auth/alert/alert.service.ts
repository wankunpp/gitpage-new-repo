import { Subject } from "rxjs/Subject";
import { Router, NavigationStart } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class AlertService{
    private subject = new Subject<any>();
    private alertChanged = false;

    constructor(private router:Router){
        router.events.subscribe(
            event =>{
                if(event instanceof NavigationStart){
                    if(this.alertChanged){
                        this.alertChanged = false;
                    }else{
                        this.subject.next();
                    }
                }
            }
        )
    }

    success(message:string, alertChanged=false){
        this.alertChanged= alertChanged;
        this.subject.next({type:'success',text:message});
    }

    error(message:string, alertChanged=false){
        this.alertChanged= alertChanged;
        this.subject.next({type:'error',text:message});
    }

    getMessage():Observable<any>{
        return this.subject.asObservable();
    }
}