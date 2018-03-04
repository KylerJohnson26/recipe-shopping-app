import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes-list/recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(
    private shoppingListService: ShoppingListService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addIngredientsToShoppingList(recipeIngredientList: Ingredient[]){
    this.shoppingListService.addIngredientsFromRecipe(recipeIngredientList);
    this.router.navigate(['/shopping_list']);
  }

}
