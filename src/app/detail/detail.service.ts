import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

   

@Injectable({

  providedIn: 'root'

})

export class DetailService {

  private url = 'https://truonghuynhit-mobilestore.herokuapp.com/api/v1/product/get/';

    

  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }


  getPosts(id) {
    return this.httpClient.get(`${this.url}/${id}`)
  }

  

    

}