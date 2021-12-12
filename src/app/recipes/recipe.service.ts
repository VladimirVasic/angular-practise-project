import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
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

  getRecipes() {
    return this.recipes.slice();
  }
}
