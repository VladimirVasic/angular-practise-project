import { RecipeService } from './recipe.service';
import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

// import {} from '../../environments/environment.prod'

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  constructor(
    private dsService: DataStorageService,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    if (this.recipeService.getRecipes().length === 0) {
      this.dsService.fetchRecipes().subscribe();
    }
    console.log(environment.foo);
  }
}
