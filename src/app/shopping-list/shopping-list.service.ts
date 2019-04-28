import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';


export class ShoppingListService{

  eventChangeIngredient = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('apples', 1),
    new Ingredient('oranges', 2)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  onAddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.eventEmitterIngredients();
  }

  onAddIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.eventEmitterIngredients();
  }

  onDeleteIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.eventEmitterIngredients();
  }

  onClearIngredient() {
    this.ingredients = [];
    this.eventEmitterIngredients();
  }

  private eventEmitterIngredients() {
    this.eventChangeIngredient.emit(this.ingredients);
  }

}

