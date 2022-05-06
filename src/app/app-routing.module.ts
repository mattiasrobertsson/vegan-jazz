import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListOfRecipesComponent } from "./list-of-recipes/list-of-recipes.component";
import { RecipeComponent } from "./recipe/recipe.component";
const routes: Routes = [
  { path: "", redirectTo: "/street-food", pathMatch: "full" },
  { path: "street-food", component: ListOfRecipesComponent },
  { path: "street-food/:id", component: RecipeComponent },
  { path: "stews-and-soups", component: ListOfRecipesComponent },
  { path: "stews-and-soups/:id", component: RecipeComponent },
  { path: "bowls", component: ListOfRecipesComponent },
  { path: "bowls/:id", component: RecipeComponent },
  { path: "pasta", component: ListOfRecipesComponent },
  { path: "pasta/:id", component: RecipeComponent },
  { path: "breakfast", component: ListOfRecipesComponent },
  { path: "breakfast/:id", component: RecipeComponent },
  { path: "salad", component: ListOfRecipesComponent },
  { path: "salad/:id", component: RecipeComponent },
  { path: "snacks-and-drinks", component: ListOfRecipesComponent },
  { path: "snacks-and-drinks/:id", component: RecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
