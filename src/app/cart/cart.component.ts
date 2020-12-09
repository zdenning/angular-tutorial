import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { CartService } from "../cart.service";
import { ItemsService } from "../items.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  user;
  items;
  checkoutForm;

  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.user = params.get("username");
    });
    this.items = this.itemsService.getList();
  }

  // onSubmit(customerData) {
  //   this.items = this.cartService.clearCart();
  //   this.checkoutForm.reset();
  //   console.warn("Your order has been submitted", customerData);
  // }

  onSelect(item) {}
}
