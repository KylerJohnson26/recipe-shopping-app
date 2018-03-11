import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes/recipes-list/recipe.model';
import { Ingredient } from '../../shared/ingredient.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes = [
    new Recipe(
      1,
      'Tasty Schnitzel', 
      'A super-tasty Schnitzel - just awesome!', 
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      2,
      'Big Fat Burger', 
      'What else to you need to know?', 
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    )
  ];

  constructor() { }

  getRecipes(){
    return this.recipes.slice(); // returns copy of recipes array
  }

  getRecipeById(id: number){
    return this.recipes.find(
      (recipe) => {
        return recipe.id === id;
      }
    )
  }

}
