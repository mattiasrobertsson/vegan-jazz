import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { RecipeListModel } from "../models/recipe-list.model";

interface IRecipeState {
  recipes: RecipeListModel[];
  isRecipesLoading: boolean;
  hasRecipesLoaded: boolean;
}

const INITIAL_STATE: IRecipeState = {
  recipes: undefined,
  isRecipesLoading: false,
  hasRecipesLoaded: false,
};

@Injectable({ providedIn: "root" })
export class RecipeListService {
  private getAllRecipes = "api/allRecipes";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  getRecipeList(): Observable<RecipeListModel[]> {
    return this.http
      .get(this.getAllRecipes)
      .pipe(map((res) => res as RecipeListModel[]));
  }

  getRecipe(id: number): Observable<RecipeListModel> {
    const url = `${this.getAllRecipes}/${id}`;
    return this.http.get(url).pipe(map((res) => res as RecipeListModel));
  }
}
