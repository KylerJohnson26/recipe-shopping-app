import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/Router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { SelectRecipeComponent } from './recipes/select-recipe/select-recipe.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: SelectRecipeComponent },
        { path: ':id', component: RecipeDetailComponent },
    ] },
    { path: 'shopping_list', component: ShoppingListComponent }
  ];

  @NgModule({
      imports: [
          RouterModule.forRoot(appRoutes)
      ],
      exports: [ RouterModule ]
  })
  export class AppRoutingModule {}