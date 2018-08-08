import { Component, OnInit } from '@angular/core';
import {ContactMessage} from './contact.model';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lat:number = 45.4935009;
  lng:number = -73.5798465; 

  contactForm:FormGroup;
  
  constructor() { }

  ngOnInit() {
      this.initForm();
  }

  private initForm(){
    this.contactForm = new FormGroup({
      'name':new FormControl("Kun Wang",Validators.required),
      'phone': new FormControl("5146544093",Validators.required),
      'email': new FormControl("wangkunpp@gmail.com",Validators.required),
      'message': new FormControl("test",Validators.required),
    });
  }

  onSubmit(){
    console.log(this.contactForm);
  }

}
