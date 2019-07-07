import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule, MatMenuModule} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { SearchComponent } from './components/search/search.component';

import {ProductService} from './product.service';
import {CategoryService} from './category.service';

import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { ListCategoryComponent } from './components/category/list-category/list-category.component';

const routes: Routes = [
  { path: 'create', component: CreateComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'list', component: ListComponent},
  { path: 'search', component: SearchComponent},
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'create-category', component: CreateCategoryComponent},
  { path: 'edit-category/:id', component: EditCategoryComponent},
  { path: 'list-category', component: ListCategoryComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    SearchComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    ListCategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  providers: [ProductService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
