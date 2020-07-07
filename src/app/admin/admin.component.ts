import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Chưa đăng sản phẩm được

  // submitForm() {
  //   var formData: any = new FormData();
  //   formData.append("productName", this.form.get('productName').value);
  //   formData.append("unitPrice", this.form.get('unitPrice').value);
  //   console.log(formData);
  //   // this.httpClient.post('https://truonghuynhit-mobilestore.herokuapp.com/api/v1/product/list', formData).subscribe(
  //   //   (response) => console.log(response),
  //   //   (error) => console.log(error)
  //   // )
  // }

}
