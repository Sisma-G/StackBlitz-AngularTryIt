import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product; // defining the product property

  constructor(
    // injecting the ActivatedRoute into the constructor
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    //  subscribe to route parameters and fetch the product based on the productId.
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get("productId")];
    });
  }

  //Receive the current product. Use the cart service's addToCart() method to add the product the cart. Display a message that you've added a product to the cart.
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }
}
