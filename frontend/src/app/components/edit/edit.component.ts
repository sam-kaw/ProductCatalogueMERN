import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../product.service';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { Product } from '../../product.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  product: any = {};
  updateForm: FormGroup;

  constructor(private productService : ProductService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      description: '',
      price: '',
      quantity: '',
      category: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.productService.getProductById(this.id).subscribe(res => {
        this.product = res;
        this.updateForm.get('name').setValue(this.product.name);
        this.updateForm.get('description').setValue(this.product.description);
        this.updateForm.get('price').setValue(this.product.price);
        this.updateForm.get('quantity').setValue(this.product.quantity);
        this.updateForm.get('category').setValue(this.product.category);
      });
    });
  }

  updateProduct(name, description, price, quantity, category) {
    this.productService.updateProduct(this.id, name, description, price, quantity, category).subscribe(() => {
      this.snackBar.open('Product updated successfully', 'OK', {
        duration: 3000
      });
    });
  }

}
