import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, NgForm, FormGroup, FormBuilder } from '@angular/forms';
import * as $ from 'jquery';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
  product: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private http: HttpClient,
  ) {
    this.product = this.fb.group({
      productName: [''],
      unitPrice: [''],
      unitInStock: [''],
      description: [''],
      manufacturer: [''],
      category: [''],
      condition: [''],
      image: ['']
    });
  }

 
  ngOnInit(): void {
  }

  private apiUrl = 'https://truonghuynhit-mobilestore.herokuapp.com';

  createProduct = () => {
    const uploadData = new FormData();
    uploadData.append('productName', this.product.get('productName').value);
    uploadData.append('unitPrice', this.product.get('unitPrice').value);
    uploadData.append('unitInStock', this.product.get('unitInStock').value);
    uploadData.append('description', this.product.get('description').value);
    uploadData.append('manufacturer', this.product.get('manufacturer').value);
    uploadData.append('category', this.product.get('category').value);
    uploadData.append('condition', this.product.get('condition').value);
    uploadData.append('image', this.product.get('image').value);
    this.http
        .post<any>(`${this.apiUrl}/api/v1/product/add`, uploadData)
        .subscribe(
          (data) => {
            console.log(data);
            alert('Add new product successfully!');
            this.router.navigateByUrl('/');
          },
          (err) => console.error(err)
        );
  }

  updateLabel = function (e: any) {
    if (e.target.files && e.target.files[0]) {
      // const reader = new FileReader();
      // reader.onload = () => {
      //   this.product.get('image').setValue(e.target.files[0]);
      // };
      // reader.readAsDataURL(e.target.files[0]);
      this.product.get('image').setValue(e.target.files[0]);

      var $this = $(e.currentTarget);
      var fileName = $this.val().toString().split("\\").pop();
      $this.siblings(".custom-file-label").addClass("selected").html(fileName);
    }
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
