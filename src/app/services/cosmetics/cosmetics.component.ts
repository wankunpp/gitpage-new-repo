import { Component, OnInit } from '@angular/core';
import { CosmeticsService } from './cosmetics.services';
import { Cosmetics } from './cosmetics.model';
import { ReviewsService } from '../../shared-data/reviews.service';


@Component({
  selector: 'app-cosmetics',
  templateUrl: './cosmetics.component.html',
  styleUrls: ['./cosmetics.component.css']
})
export class CosmeticsComponent implements OnInit {

  rates:any[]=[];

  cosmetics:Cosmetics[];
  filteredName='';

  constructor(private cosmeService:CosmeticsService, private reviewService:ReviewsService) { }

  ngOnInit() {
    this.cosmetics = this.cosmeService.getCosmes();
    for(let cosme of this.cosmetics){
      const cosmeRate = this.reviewService.avarageRateOfSingleItem(cosme.name);
      const name = cosme.name;
      this.rates.push({ [name]: cosmeRate});
    }

    console.log(this.rates[0]['shuazi']);
  }

  onSearch(name:string){
    this.filteredName = name;
  }

  getCosmeRating(name:string){
    this.reviewService.avarageRateOfSingleItem(name);
  }
  
}
