import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CartService } from "../cart.service";
import { ItemsService } from "../items.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  user;
  constructor(
    private route: ActivatedRoute,
    private itemsService: ItemsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.user = params.get("username");
    });
    console.warn(this.user);
  }
}
