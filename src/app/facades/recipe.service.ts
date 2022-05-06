import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { RecipeListModel } from "../models/recipe-list.model";
import { RecipeListService } from "../services/recipe-list.service";

interface ICurrentRecipeListState {
  currentRecipeList: RecipeListModel[];
  isCurrentRecipeListLoading: boolean;
  // isCurrentRecipeListLoaded: boolean;
  currentRecipe: RecipeListModel;
  // isIngredientsLoading: boolean;
  // isIngredientsLoaded: boolean;
}

const INITIAL_STATE: ICurrentRecipeListState = {
  currentRecipeList: undefined,
  isCurrentRecipeListLoading: false,
  //  isCurrentRecipeListLoaded: false,
  currentRecipe: undefined,
  // isIngredientsLoading: false,
  // isIngredientsLoaded: false,
};

@Injectable({ providedIn: "root" })

export class RecipeService {
  private currentRecipeList$: BehaviorSubject<
    RecipeListModel[]
  > = new BehaviorSubject(INITIAL_STATE.currentRecipeList);
  private isCurrentRecipeListLoading$: BehaviorSubject<
    boolean
  > = new BehaviorSubject(INITIAL_STATE.isCurrentRecipeListLoading);
  /* private isCurrentRecipeListLoaded$: BehaviorSubject<
    boolean
  > = new BehaviorSubject(INITIAL_STATE.isCurrentRecipeListLoaded); */
  private currentRecipe$: BehaviorSubject<
    RecipeListModel
  > = new BehaviorSubject(INITIAL_STATE.currentRecipe);
  /* private isIngredientsLoading$: BehaviorSubject<boolean> = new BehaviorSubject(
    INITIAL_STATE.isIngredientsLoading
  );
  private isIngredientsLoaded$: BehaviorSubject<boolean> = new BehaviorSubject(
    INITIAL_STATE.isIngredientsLoaded
  ); */

  recipes: RecipeListModel[];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private recipeListService: RecipeListService) {}

  getRecipeList(route: string): void {
    this.isCurrentRecipeListLoading$.next(true);
    this.currentRecipeList$.next(undefined);
    this.recipeListService
      .getRecipeList()
      .pipe()
      .subscribe((res: RecipeListModel[]) => {
        this.currentRecipeList$.next(res);
        if (route === "/street-food") {
          this.currentRecipeList$.next(
            res.filter((r) => r.typeOfRecipe === "street-food")
          );
        } else if (route === "/stews-and-soups") {
          this.currentRecipeList$.next(
            res.filter((r) => r.typeOfRecipe === "stews-and-soups")
          );
        } else if (route === "/bowls") {
          this.currentRecipeList$.next(
            res.filter((r) => r.typeOfRecipe === "bowl")
          );
        } else if (route === "/pasta") {
          this.currentRecipeList$.next(
            res.filter((r) => r.typeOfRecipe === "pasta")
          );
        } else if (route === "/salad") {
          this.currentRecipeList$.next(
            res.filter((r) => r.typeOfRecipe === "salad")
          );
        } else if (route === "/breakfast") {
          this.currentRecipeList$.next(
            res.filter((r) => r.typeOfRecipe === "breakfast")
          );
        } else {
          this.currentRecipeList$.next(
            res.filter((r) => r.typeOfRecipe === "snacks-and-drinks")
          );
        }
        this.isCurrentRecipeListLoading$.next(false);
        // this.isCurrentRecipeListLoaded$.next(true);
      });
  }

  getRecipe(id: number) {
    // this.isIngredientsLoaded$.next(false);
    // this.isIngredientsLoading$.next(true);
    this.currentRecipe$.next(undefined);

    this.recipeListService
      .getRecipe(id)
      .pipe()
      .subscribe((recipe: RecipeListModel) => {
        this.currentRecipe$.next(recipe);
        // this.isIngredientsLoaded$.next(true);
        // this.isIngredientsLoading$.next(false);
      });
  }

  getCurrentRecipeList(): Observable<RecipeListModel[]> {
    return this.currentRecipeList$;
  }

  isCurrentRecipeListLoading(): Observable<boolean> {
    return this.isCurrentRecipeListLoading$;
  }

  /* isCurrentRecipeListLoaded(): Observable<boolean> {
    return this.isCurrentRecipeListLoaded$;
  } */

  getCurrentRecipe(): Observable<RecipeListModel> {
    return this.currentRecipe$;
  }
}
