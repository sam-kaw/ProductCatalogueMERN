import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material';

import {Category} from '../../../category.model';
import {CategoryService} from '../../../category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  categories: Category[];
  displayedColumns: string [] = ['catName'];

  constructor(private categoryService : CategoryService, private router: Router) { }

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categoryService
      .getCategories()
      .subscribe((data: Category[]) => {
        this.categories = data;
        console.log('Data requested ...');
        console.log(this.categories);
      });
  }

  editCategories(id) {
    this.router.navigate([`/edit/${id}`]);
  }

}
