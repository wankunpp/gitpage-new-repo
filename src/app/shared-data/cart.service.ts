import { Subject } from "rxjs/Subject";
import { Item } from "./item.model";
import { Injectable } from "@angular/core";


export class CartService{
    private cart:Item[]=[];
    cartChanged = new Subject<Item[]>();

    constructor(){}

    getCart(){
        return this.cart.slice();
    }

    addToCart(item:Item){
        this.cart.push(item);
        this.cartChanged.next(this.cart.slice());

    }

    deleteFromCart(item:Item){
        const index= this.cart.indexOf(item);
        this.cart.splice(index,1);
        this.cartChanged.next(this.cart.slice());
    }

    updateItem(item:Item,amount:number){
        const newItem = new Item(item.name,item.description,item.imgUrl,item.price,amount);
        const index = this.cart.indexOf(item);
        this.cart[index] = newItem;
        this.cartChanged.next(this.cart.slice());
    }

    getItembyName(name:string){
        return this.cart.find(
            (item)=>item.name ===name
        )
    }

    

}