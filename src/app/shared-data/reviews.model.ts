export class Reviews{
    public user_name:string;
    public item_name:string;
    public rate:number;
    public comments:string;

    constructor(username:string,itemname:string,rate:number,comments:string){
        this.user_name=username;
        this.item_name=itemname;
        this.rate =rate;
        this.comments = comments;
    }
}