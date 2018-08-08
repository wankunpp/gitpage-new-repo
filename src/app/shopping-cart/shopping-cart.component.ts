import { Component, OnInit} from '@angular/core';
import { CartService } from '../shared-data/cart.service';
import { Item } from '../shared-data/item.model';
import { AppointmentSerivce } from '../shared-data/appointment.service';
import { Appointment } from '../shared-data/appointment.model';

declare var $:any;

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  
  cart:Item[];
  appointment:Appointment;
  buttonclick=false;
  
  
  constructor(private cartService:CartService,private appointmentService:AppointmentSerivce) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.appointment = this.appointmentService.getAppointments()[0];
    this.cartService.cartChanged.subscribe(
      (cart:Item[])=>{
        this.cart = cart;
      }
    )
    this.appointmentService.appointmentChanged.subscribe(
      (appointments:Appointment[])=>{
        this.appointment=appointments[0];
      }
    )
  }

  onDelete(item:Item){
    this.cartService.deleteFromCart(item);
  }
  
  cancelAppointment(){
    this.appointmentService.cancelAppointment();
  }

  onChangeAmount(name:string){
    const getitembyname= this.cartService.getItembyName(name);
    var value = $("#"+name+" option:selected").val();
    this.cartService.updateItem(getitembyname,value);
    $(function(){
      $("#"+name).val(value);
    })
  }

  onWriteReview(){
    this.buttonclick=!this.buttonclick;
  }

}
