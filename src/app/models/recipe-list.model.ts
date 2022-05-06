import { CookTime } from "./cook-time.enum";
import { HowToModel } from "./how-to-model";
import { IngredientModel } from "./ingredient-model";
import { Servings } from "./servings.enum";
import { TypeOfRecipe } from "./type-of-recipe.enum";

export class RecipeListModel {
  id: number;
  name: string;
  cookTime: CookTime; // ENUM
  typeOfRecipe: TypeOfRecipe; // ENUM
  servings: Servings; // ENUM
  ingredients: IngredientModel[];
  image: string;
  imageFlag?: string; // optional
  howTo: HowToModel[];
}
