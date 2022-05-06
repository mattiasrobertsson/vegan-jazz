import { Location } from "@angular/common";
import { Component, HostListener, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { RecipeService } from "../facades/recipe.service";
import { RecipeListModel } from "../models";
import { IngredientModel } from "../models/ingredient-model";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.scss"],
})
export class RecipeComponent implements OnInit {
  public innerWidth: any;
  currentRecipe$: Observable<RecipeListModel>;
  ingredientList: IngredientModel[];
  basicIngredientExist: boolean;
  spiceExist: boolean;
  toppingExist: boolean;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location
  ) {}

  @HostListener("window:resize" /*, ["$event"] */)
  onResize(/* event */) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.recipeService.getRecipe(id);
    this.currentRecipe$ = this.recipeService.getCurrentRecipe();
    this.innerWidth = window.innerWidth;
    this.basicIngredientExist = false;
    this.spiceExist = false;
    this.toppingExist = false;

    this.renderIngredientLists();
  }

  // this function looks for instances sf every ingredient category. If at least one exist of for ex. "spice", the spice list is rendered.
  renderIngredientLists() {
    this.currentRecipe$.subscribe((recipe) => {
      recipe?.ingredients.find((obj) => {
        if (obj.category === "basic") {
          this.basicIngredientExist = true;
        }
        if (obj.category === "spice") {
          this.spiceExist = true;
        }
        if (obj.category === "topping") {
          this.toppingExist = true;
        }
      });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
