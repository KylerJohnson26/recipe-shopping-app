import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipes-list/recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() showRecipeDetails = new EventEmitter<Recipe>();

  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.recipes;
  }

  onRecipeSelected(recipe: Recipe){
    this.showRecipeDetails.emit(recipe);
  }

}
