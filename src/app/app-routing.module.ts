import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/Router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeDetailResolverService } from './recipes/recipe-detail/recipe-detail-resolver.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        { path: ':id', component: RecipeDetailComponent, resolve: { recipe: RecipeDetailResolverService } }
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