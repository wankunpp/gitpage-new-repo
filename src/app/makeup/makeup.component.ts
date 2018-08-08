import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppointmentSerivce } from '../shared-data//appointment.service';
import { Appointment } from '../shared-data/appointment.model';
import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-makeup',
  templateUrl: './makeup.component.html',
  styleUrls: ['./makeup.component.css']
})
export class MakeupComponent implements OnInit,OnDestroy {

  appointmentSubscription:Subscription;
  datepickerModel: Date ;
  minDate: Date;
  AllAppontment:Appointment[];
  hasAppoint = false;
  isLogged:boolean;
  statusSubscription:Subscription;

  constructor(private appointmentService:AppointmentSerivce,private authService:AuthenticationService) { 
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1);
  }

  ngOnInit() {
    this.AllAppontment = this.appointmentService.getAppointments();
    this.appointmentSubscription=this.appointmentService.appointmentChanged.subscribe(
      (Appointments:Appointment[])=>{
        this.AllAppontment=Appointments;
      }
    )
    this.isLogged = this.authService.loggedIn;
    this.statusSubscription = this.authService.StatusChanged.subscribe(
      (islogged:boolean)=>{
        this.isLogged = islogged;
      }
    )
  }

  onAddAppointment(date:Date){
    this.appointmentService.newAppointments(new Appointment('user',date));
    this.hasAppoint = true;
  }

  cancelAppointment(){
    this.appointmentService.cancelAppointment();
    this.hasAppoint=false;
  }

  ngOnDestroy(){
    this.appointmentSubscription.unsubscribe();
    this.statusSubscription.unsubscribe();
  }
}
