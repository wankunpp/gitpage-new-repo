import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  lat:number = 45.4935009;
  lng:number = -73.5798465; 
  
  constructor() { }

  ngOnInit() {
  }

}
