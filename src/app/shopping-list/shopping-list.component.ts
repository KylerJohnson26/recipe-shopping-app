import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { IngredientService } from './ingredient.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  ingredientName: string = '';
  ingredientAmount: number;

  constructor(private ingService: IngredientService) { }

  ngOnInit() {
    this.ingredients = this.ingService.ingredients;
  }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
