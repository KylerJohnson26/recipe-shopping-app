import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredientName: string = '';
  ingredientAmount: number;

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 3)
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddingIngredient(newIngredient: Ingredient){
    this.ingredients.push(newIngredient);
  }

}
