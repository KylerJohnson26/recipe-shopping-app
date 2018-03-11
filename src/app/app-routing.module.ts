import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/Router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    { path: '', component: RecipesComponent },
    { path: 'shopping_list', component: ShoppingListComponent }
  ];

  @NgModule({
      imports: [
          RouterModule.forRoot(appRoutes)
      ],
      exports: [ RouterModule ]
  })
  export class AppRoutingModule {}