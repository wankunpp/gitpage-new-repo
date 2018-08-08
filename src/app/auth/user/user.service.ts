import { User } from "./user.model";
import { Subject } from "rxjs/Subject";


export class UserService{
    usersChanged = new Subject<User[]>();

    private users:User[]=[
        {id:1,username:'www',password:'111'},
        {id:2,username:'qqq',password:'111'},
        {id:3,username:'zzz',password:'111'},
    ];

    getUsers(){
        return this.users.slice();
    }

    addUser(user:User){
        this.users.push(user);
        this.usersChanged.next(this.users.slice());
    }
}