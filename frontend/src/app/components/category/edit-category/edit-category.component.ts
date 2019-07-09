import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../category.service';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { Category } from '../../../category.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  id: String;
  category: any = {};
  updateForm: FormGroup;

  constructor(private categoryService : CategoryService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { }

  createForm() {
    this.updateForm = this.fb.group({
      catName: ['', Validators.required]
    });
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.categoryService.getCategoryById(this.id).subscribe(res => {
        this.category = res;
        this.updateForm.get('catName').setValue(this.category.catName);
      });
    });
  }

  updateCategory(catName) {
    this.categoryService.updateCategory(this.id, catName).subscribe(() => {
      this.snackBar.open('Category updated successfully', 'OK', {
        duration: 3000
      });
    });
  }

}
