import { Recipe } from './../recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A test recipe 1',
      'test 1',
      'http://www.picadostava.rs/wp-content/uploads/2017/02/Capricoza.jpg'
    ),
    new Recipe(
      'A test recipe 2',
      'test 2',
      'http://www.picadostava.rs/wp-content/uploads/2017/02/Capricoza.jpg'
    ),
    new Recipe(
      'A test recipe 3',
      'test 3',
      'http://www.picadostava.rs/wp-content/uploads/2017/02/Capricoza.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
