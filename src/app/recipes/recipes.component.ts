import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipes-list/recipe.model';
import { RecipeService } from './recipes-list/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(selectedRecipe => this.selectedRecipe = selectedRecipe);
  }

}
