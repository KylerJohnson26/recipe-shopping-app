import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() onAddingIngredient = new EventEmitter<Ingredient>();
  nameInput: string;
  amountInput: number;


  constructor() { 
  }

  ngOnInit() {
  }

  onAddIngredient() {
    if(this.nameInput && this.amountInput)
      this.onAddingIngredient.emit(new Ingredient(this.nameInput, this.amountInput)); 
  }

}
