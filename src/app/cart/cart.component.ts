import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;
  constructor(
    private cartService: CartService,
    private router: Router
  ) { 

    
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    console.log(this.items);
  }

  clearCart(){
    localStorage.removeItem('cart');
    window.location.reload();
  }

}