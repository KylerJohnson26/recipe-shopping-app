import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes-list/recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Router, ActivatedRoute, Data, Params } from '@angular/Router';
import { RecipeService } from '../recipes-list/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private shoppingListService: ShoppingListService,
    private router: Router
  ) { }

  ngOnInit() { 
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeById(this.id);
      }
    );
  }

  addIngredientsToShoppingList(recipeIngredientList: Ingredient[]){
    this.shoppingListService.addIngredientsFromRecipe(recipeIngredientList);
    this.router.navigate(['/shopping_list']);
  }

}
