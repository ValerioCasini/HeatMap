import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
    selector: "app-users",
    templateUrl: './users.component.html',
    styleUrls: ["./users.component.css"],
})
export class UsersComponent {

    title = "Users";
     jsonObj = JSON.parse(UserService.getUsers());


}
