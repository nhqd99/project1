
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {

    // items = [];

    addToCart(product) {
      // this.items.push(product);
      var cart = JSON.parse(localStorage.getItem('cart')) ?? [] ;
      var tmp = 0;
      if(cart.length == 0){
        product.qty = 1;
        cart.push(product);
        tmp = 1;
        console.log("rỗng");
      }

      if(tmp == 0){
        for(var i in cart){
          if(product.id == cart[i].id){
            cart[i].qty += 1;
            console.log(cart[i].qty);
            console.log("11");
            tmp = 1;
            break;
          }
        }
      }
      
      if(tmp == 0){
        product.qty = 1;
        cart.push(product);
        console.log("22");
      }



      //console.log(cart[0].id);
      //console.log(product.id);
      
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  
    getItems() {
      // return this.items;
      return JSON.parse(localStorage.getItem('cart'));
    }
  
    clearCart() {
      localStorage.removeItem('cart');
      // this.items = [];
      // return this.items;
    }

}