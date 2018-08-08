import { Appointment } from "./appointment.model";
import { Subject } from "rxjs/Subject";

export class AppointmentSerivce{
    private allAppointment:Appointment[]= [];
    appointmentChanged = new Subject<Appointment[]>();

    getAppointments(){
        return this.allAppointment.slice();
    }

    newAppointments(newappointment:Appointment){
        this.allAppointment.push(newappointment);
        this.appointmentChanged.next(this.allAppointment.slice());
    }

    cancelAppointment(){
        this.allAppointment.splice(0,1);
        this.appointmentChanged.next(this.allAppointment.slice());
    }
}