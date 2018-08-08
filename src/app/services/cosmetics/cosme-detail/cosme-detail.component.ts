import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CosmeticsService } from '../cosmetics.services';
import { Cosmetics } from '../cosmetics.model';
import { Item } from '../../../shared-data/item.model';
import { CartService } from '../../../shared-data/cart.service';
import { ReviewsService } from '../../../shared-data/reviews.service';
import { AuthenticationService } from '../../../auth/authentication.service';
import { Reviews } from '../../../shared-data/reviews.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cosme-detail',
  templateUrl: './cosme-detail.component.html',
  styleUrls: ['./cosme-detail.component.css']
})
export class CosmeDetailComponent implements OnInit {

  cosmetic:Cosmetics;
  rate:number;
  isReadonly: boolean = false;
  username:string;
  reviews:Reviews[];
  
  reviewAmount:number;
  onWrite:boolean = false;
  isLoggedin:boolean;
  newRating:number = 0;

  constructor(private route:ActivatedRoute,
              private cosmeService:CosmeticsService,
              private cartService:CartService,
              private reviewService:ReviewsService,
              private authService:AuthenticationService) { }

  ngOnInit() {
    const name= this.route.snapshot.params['name'];
    this.cosmetic = this.cosmeService.getCosme(name);
    this.username = this.authService.activeUser.username;
    this.reviews = this.reviewService.getReviewsByItemname(name);
    this.rate = this.reviewService.avarageRateOfSingleItem(name);
    this.reviewAmount= this.reviewService.getViewAmountOnSingleItem(name);
    this.reviewService.reviewChanged.subscribe(
      (reviews)=>{
        this.reviews = reviews.filter(review=>review.item_name === name);
        this.rate = this.reviews.map(review=>review.rate)
                            .reduce((aver,value)=>aver+value/this.reviews.length,0);
        this.reviewAmount = reviews.filter(review=>review.item_name === name).length;
      }  
    );
    this.isLoggedin = this.authService.loggedIn;
  }

  onAddtoCart(cosme:Cosmetics){
    this.cosmeService.addCosmeToCart(cosme);
  }

  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.isReadonly = true;
    }
  }

  onWriteReview(){
    this.onWrite = true;
  }

  onAddReview(form:NgForm){
    this.onWrite=false;
    const comment = form.value.newComment;
    const rating = this.newRating;
    this.reviewService.addNewReview(this.username,this.cosmetic.name,rating,comment);
  }
}
