import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BreakfastComponent } from "./breakfast/breakfast.component";
import { PastaAndPizzaComponent } from "./pasta-and-pizza/pasta-and-pizza.component";
import { ListOfRecipesComponent } from "./list-of-recipes/list-of-recipes.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { SaladsComponent } from "./salads/salads.component";

const routes: Routes = [
  { path: "", redirectTo: "/street-food", pathMatch: "full" },
  { path: "street-food", component: ListOfRecipesComponent },
  { path: "stews-and-soups", component: ListOfRecipesComponent },
  { path: "bowls", component: ListOfRecipesComponent },
  { path: "pasta-and-pizza", component: ListOfRecipesComponent },
  { path: "recipe/:id", component: RecipeComponent } 
  /* { path: "street-food", component: StreetFoodComponent },
  { path: "stews-and-soups", component: StewsAndSoupsComponent },
  { path: "bowls", component: BowlsComponent },
  { path: "salads", component: SaladsComponent },
  { path: "breakfast", component: BreakfastComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
