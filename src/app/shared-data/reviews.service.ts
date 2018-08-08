import { Reviews } from "./reviews.model";
import { Subject } from "rxjs/Subject";

export class ReviewsService{

    reviewChanged= new Subject<Reviews[]>();

    private reviews:Reviews[]=[
        {'user_name':'luke','item_name':'fenpu','rate':4,'comments':'this product is so useful! i like it!'},
        {'user_name':'wank','item_name':'shuazi','rate':1,'comments':'this product is not useful! i dont like it!'},
        {'user_name':'cary','item_name':'fenpu','rate':2,'comments':'this product is not useful! i dont like it!'},

    ];

    getReviews(){
        return this.reviews.slice();
    }

   getReviewsByUsername(username:string){
        return this.reviews.filter(review=>
            review.user_name === username
        )
    }

    getReviewsByItemname(itemname:string){
        return this.reviews.filter((review)=>{
            return review.item_name === itemname;
        })
    }

    avarageRateOfSingleItem(itemname:string){
        const values = this.reviews
        .filter(review=>review.item_name===itemname)
        .map(review=>review.rate)
        
        if(values === null){
            return 0;
        }
        return values.reduce((aver,value)=>aver+value/values.length,0);
    }

    getViewAmountOnSingleItem(itemname:string){
        return this.reviews.filter(review=>review.item_name === itemname).length;
    }

    addNewReview(username:string,itemname:string,rate:number,comment:string){
        const newReview = new Reviews(username,itemname,rate,comment);
        this.reviews.push(newReview);
        this.reviewChanged.next(this.reviews);
    }

}