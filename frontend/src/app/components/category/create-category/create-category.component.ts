import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CategoryService} from '../../../category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  createForm: FormGroup;

  constructor(private categoryService : CategoryService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      catName: ['', Validators.required]
    });
  }

  addCategory(catName) {
    this.categoryService.addCategory(catName).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit() {
  }

}
