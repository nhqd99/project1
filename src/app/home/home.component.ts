import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts;

  constructor(private service:ProductService) {}

  ngOnInit() {

      this.service.getPosts()
        .subscribe(response => {
          this.posts = response;
          console.log(this.posts);
        });

  }

}
