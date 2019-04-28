import { Recipe } from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Happy Meal',
      'first recipe',
      'https://www.mcdonalds.com.my/storage/foods/September2017/thumb2hmcheeseburger-33b072dcab.jpg',
      [
        new Ingredient( 'Burger', 1),
        new Ingredient('Fries', 1),
        new Ingredient('Coke', 1) ]
    ),
    new Recipe('Shake',
      'second recipe',
      'https://cakeandwhisky.files.wordpress.com/2017/05/shake-shack-london-9.jpg',
      [ new Ingredient('Milk', 1), new Ingredient('Banana', 2)]
    ),
  ];
  constructor(private shoppinglistService: ShoppingListService) {}

  getRecipe(): Recipe[] {
    return this.recipes.slice();
  }

  addRecipeToShopping(recipe: Recipe) {
    this.shoppinglistService.onAddIngredients(recipe.ingredients);
  }
}
