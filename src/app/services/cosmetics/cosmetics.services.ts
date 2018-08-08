import { Cosmetics } from "./cosmetics.model";
import { Injectable } from "@angular/core";
import { CartService } from "../../shared-data/cart.service";
import { Item } from "../../shared-data/item.model";


@Injectable()
export class CosmeticsService{
    private cosmetics:Cosmetics[]=[
        {'name':'shuazi','price':200,'imgUrl':'../../assets/img/cosmetics/images.jpeg','description':'this is the first item'},
        {'name':'fenpu','price':300,'imgUrl':'../../assets/img/cosmetics/machiajul-pasagera.jpg','description':'this is the first item'},
        {'name':'meibi','price':400,'imgUrl':'../../assets/img/cosmetics/makeup-brush-1746322_960_720.jpg','description':'this is the first item'},
        {'name':'kouhong','price':500,'imgUrl':'../../assets/img/cosmetics/makeup-brush-1746322_960_720.jpg','description':'this is the first item'},
        {'name':'kouhong2','price':600,'imgUrl':'../../assets/img/cosmetics/pedzle-przechowywanie.jpg','description':'this is the first item'}
    ];

    constructor(private cartService:CartService){}

    getCosmes(){
        return this.cosmetics.slice();
    }

    getCosme(name:string){
        return this.cosmetics.find(
            cosme=> cosme.name===name
        )
    }

    addCosmeToCart(cosme:Cosmetics){
       const item = this.cartService.getCart().find(
           item=>item.name === cosme.name
       )
       if(item != null){
            this.cartService.updateItem(item,item.amount+1);
       }else{
           const newItem = new Item(cosme.name,cosme.description,cosme.imgUrl,cosme.price,1);
           this.cartService.addToCart(newItem);
       }
       
    }
}