import { Location } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { RecipeListModel } from "../models";
import { IngredientModel } from "../models/ingredient-model";
import { RecipeListService } from "../services/recipe-list.service";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.scss"]
})
export class RecipeComponent implements OnInit {
  @Input() recipe: RecipeListModel;
  basic: IngredientModel[] = [];
  spice: IngredientModel[] = [];
  topping: IngredientModel[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private recipeListService: RecipeListService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.recipeListService
      .getRecipe(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: RecipeListModel) => {
        this.recipe = res;
        this.splitIngredientsLists();
      });
  }

  // THIS SHOULD BE DONE IN THE FACADE LAYER
  splitIngredientsLists() {
    this.recipe.ingredients.forEach(eachObj => {
      if (eachObj.category === "basic") {
        this.basic.push(eachObj);
      } else if (eachObj.category === "spice") {
        this.spice.push(eachObj);
      } else {
        this.topping.push(eachObj);
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
