import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ItemsService } from "../items.service";
import { UsersService } from "../users.service";

@Component({
  selector: "app-christmas-list",
  templateUrl: "./christmas-list.component.html",
  styleUrls: ["./christmas-list.component.css"]
})
export class ChristmasListComponent implements OnInit {
  username;
  users;
  firstName;
  items;
  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.username = params.get("user.username");
      this.users = this.usersService.getUsers();
      this.firstName = this.usersService.getUsers().forEach((u: any) => {
        if (u.username === this.username) {
          this.firstName = u.firstName;
        }
      });
    });
    // In the future this will be an API call using the username
    this.items = this.itemsService.getList();
  }

  onSelect() {}
}
