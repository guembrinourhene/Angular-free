import { Component, OnInit } from '@angular/core';
import categories from './categorie-list';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  public categoriesList = categories;

  constructor() { }

  ngOnInit(): void {
    console.log(this.categoriesList)
  }

}