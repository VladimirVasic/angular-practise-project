import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'test',
      'http://www.picadostava.rs/wp-content/uploads/2017/02/Capricoza.jpg'
    ),
    new Recipe(
      'A test recipe',
      'test',
      'http://www.picadostava.rs/wp-content/uploads/2017/02/Capricoza.jpg'
    ),
    new Recipe(
      'A test recipe',
      'test',
      'http://www.picadostava.rs/wp-content/uploads/2017/02/Capricoza.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
