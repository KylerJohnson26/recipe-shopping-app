import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes-list/recipe.service';
import { Recipe } from '../recipes-list/recipe.model';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecipeDetailResolverService implements Resolve<Recipe> {

  constructor(
    private recipeService: RecipeService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : Observable<Recipe> | Promise<Recipe> | Recipe 
  {
    return this.recipeService.getRecipeById(+route.params['id']);
  }

}
