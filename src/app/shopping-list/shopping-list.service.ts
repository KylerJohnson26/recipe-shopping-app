import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 3)
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice(); // returns a copy of the ingredients array
  }

  addNewIngredient(ingName: string, ingAmount: number){
    this.ingredients.push(new Ingredient(ingName, ingAmount));
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredientsFromRecipe(recipeIngredientsList: Ingredient[]){
    this.ingredients.push(...recipeIngredientsList);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
