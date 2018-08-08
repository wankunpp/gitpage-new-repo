import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name:'filter',
})
export class filterPipe implements PipeTransform{
    transform(value:any, filterString:string):any{
        if(value.length ===0){
            return value;
        }
        const resultArray=[];
        for(const item of value){
            if(item.name.indexOf(filterString) != -1){
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}