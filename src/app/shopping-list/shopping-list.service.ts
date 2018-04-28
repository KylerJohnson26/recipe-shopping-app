import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
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
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredientsFromRecipe(recipeIngredientsList: Ingredient[]){
    this.ingredients.push(...recipeIngredientsList);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
