import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 3)
  ];

  constructor() { }

  addNewIngredient(ingName: string, ingAmount: number){
    this.ingredients.push(new Ingredient(ingName, ingAmount));
  }

}
