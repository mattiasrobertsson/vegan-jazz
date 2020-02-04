import { HowToModel } from "./how-to-model";
import { IngredientModel } from "./ingredient-model";

export class RecipeListModel {
  id: number;
  name: string;
  cookTime: string;
  typeOfRecipe: string;
  servings: string;
  ingredients: IngredientModel[];
  image: string;
  howTo: HowToModel[];
}
