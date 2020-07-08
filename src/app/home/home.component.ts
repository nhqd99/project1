import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts;

  constructor(private service: ProductService) {}

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
        console.log(this.posts);
      });

    var user = null;
    if (user = localStorage.getItem('user'))
      window.user = JSON.parse(user);

  }

}
