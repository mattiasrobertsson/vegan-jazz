import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { RecipeListModel } from "../models/recipe-list.model";
import { RecipeListService } from "../services/recipe-list.service";

interface ICurrentRecipeListState {
  currentRecipeList: RecipeListModel[];
}

const INITIAL_STATE: ICurrentRecipeListState = {
  currentRecipeList: undefined
};

@Injectable({ providedIn: "root" })
export class RecipeService {
  private currentRecipeList$: BehaviorSubject<
    RecipeListModel[]
  > = new BehaviorSubject(INITIAL_STATE.currentRecipeList);
  recipes: RecipeListModel[];
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private recipeListService: RecipeListService) {}

  getRecipeList(route: string): void {
    this.currentRecipeList$.next(undefined);
    this.recipeListService
      .getRecipeList()
      .pipe()
      .subscribe((res: RecipeListModel[]) => {
        this.currentRecipeList$.next(res);
        if (route === "/street-food") {
          this.currentRecipeList$.next(
            res.filter(r => r.typeOfRecipe === "street-food")
          );
        } else if (route === "/stews-and-soups") {
          this.currentRecipeList$.next(
            res.filter(r => r.typeOfRecipe === "stews-and-soups")
          );
        } else if (route === "/bowls") {
          this.currentRecipeList$.next(
            res.filter(r => r.typeOfRecipe === "bowl")
          );
        } else if (route === "/pasta-and-pizza") {
          this.currentRecipeList$.next(
            res.filter(r => r.typeOfRecipe === "pasta-and-pizza")
          );
        } else if (route === "/salad") {
          this.currentRecipeList$.next(
            res.filter(r => r.typeOfRecipe === "salad")
          );
        } else {
          this.currentRecipeList$.next(
            res.filter(r => r.typeOfRecipe === "breakfast")
          );
        }
      });
  }

  getCurrentRecipeList(): Observable<RecipeListModel[]> {
    return this.currentRecipeList$;
  }
}
