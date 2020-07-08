import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';   

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private url = 'https://truonghuynhit-mobilestore.herokuapp.com/api/v1/product/list';   

  constructor(private httpClient: HttpClient) { }   

  getPosts(){
    return this.httpClient.get(this.url);
  }

    

}