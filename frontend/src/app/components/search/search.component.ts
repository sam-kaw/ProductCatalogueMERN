import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material';

import {Product} from '../../product.model';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  products: Product[];
  displayedColumns: string [] = ['name', 'description', 'price', 'quantity', 'category', 'skuNumber', 'actions'];

  constructor(private productService : ProductService, private router: Router) {}

  ngOnInit() {
    this.searchProducts();
  }

  searchProducts() {
    this.productService
      .getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
        console.log('Data requested ...');
        console.log(this.products);
      });
  }

}
