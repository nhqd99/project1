import { Component, OnInit } from '@angular/core';
import { DetailService } from './detail.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  posts;
  constructor(private service:DetailService,private route: ActivatedRoute, private cartService: CartService) {}
  
  ngOnInit() {
      let id = this.route.snapshot.params.id;
      this.service.getPosts(id)

        .subscribe(response => {

          this.posts = response;
          
        });

  }
  addToCart(product) {
    this.cartService.addToCart(product);
    console.log(this.cartService.getItems());
    window.alert('Your product has been added to the cart!');
  }

}
