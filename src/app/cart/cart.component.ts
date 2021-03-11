import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    //Define the form within the constructor using the FormBuilder group method
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  //Method which will activate when form is submitted
  onSubmit(customerData) {
    // We have no server to process the data now, but here is where the data would be submitted if we did.

    this.items = this.cartService.clearCart(); //Clear items after submission
    this.checkoutForm.reset(); //Form must be reset after submission

    console.warn("Your order has been submitted", customerData);
  }
}
