import { Component, OnInit, HostListener} from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { RecipeService } from "../facades/recipe.service";
import { RecipeListModel } from "../models/recipe-list.model";
import { RecipeListService } from "../services/recipe-list.service";

@Component({
  selector: "app-list-of-recipes",
  templateUrl: "./list-of-recipes.component.html",
  styleUrls: ["./list-of-recipes.component.scss"]
})
export class ListOfRecipesComponent implements OnInit {
  recipes: RecipeListModel[];
  // toggleCookTimeOrder: boolean;
  public innerWidth: any;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private recipeListService: RecipeListService,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    const route = this.router.url;
    // this.getRecipeList(route);

    this.recipeService.getRecipeList(route);

    this.recipeService
      .getCurrentRecipeList()
      .pipe(takeUntil(this.destroy$))
      .subscribe(recipes => {
        this.recipes = recipes;
      });

    // TO DO: Remove timeout and att a finishedRequest function
    /* setTimeout(() => {
       this.sortByName();
    }, 1000); */
  }


  // OLD FUNCTION WHICH CALLED THE SERVICE DIRECTLY
  /* getRecipeList(route: string): void {
    this.recipeListService
      .getRecipeList()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: RecipeListModel[]) => {
        // THIS LOGIC SHOULD BE MOVED TO A FACADE LAYER
        if (route === "/street-food") {
          this.recipes = res.filter(r => r.typeOfRecipe === "street-food");
        } else if (route === "/stews-and-soups") {
          this.recipes = res.filter(r => r.typeOfRecipe === "stews-and-soups");
        } else if (route === "/bowls") {
          this.recipes = res.filter(r => r.typeOfRecipe === "bowl");
        } else if (route === "/pasta-and-pizza") {
          this.recipes = res.filter(r => r.typeOfRecipe === "pasta-and-pizza");
        } else if (route === "/salad") {
          this.recipes = res.filter(r => r.typeOfRecipe === "salad");
        } else {
          this.recipes = res.filter(r => r.typeOfRecipe === "breakfast");
        }
      });
  } */

  sortByName() {
    this.recipes.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  /* sortByCookTime() {
    this.toggleCookTimeOrder = !this.toggleCookTimeOrder;
    if (this.toggleCookTimeOrder) {
      this.recipesStewsAndSoupsList.sort((a, b) => {
        if (a.cookTime < b.cookTime) {
          return -1;
        } else if (a.cookTime > b.cookTime) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      this.recipesStewsAndSoupsList.sort((a, b) => {
        if (a.cookTime > b.cookTime) {
          return -1;
        } else if (a.cookTime < b.cookTime) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  } */
}
