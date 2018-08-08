export class Cosmetics{
    public name:string;
    public price:number;
    public imgUrl:string;
    public description:string;

    constructor(name:string,price:number,imgUrl:string,description:string){
        this.name=name;
        this.price=price;
        this.imgUrl=imgUrl;
        this.description=description;
    }
}