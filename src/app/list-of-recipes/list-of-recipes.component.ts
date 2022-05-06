import { Component, HostListener, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { RecipeService } from "../facades/recipe.service";
import { RecipeListModel } from "../models/recipe-list.model";

@Component({
  selector: "app-list-of-recipes",
  templateUrl: "./list-of-recipes.component.html",
  styleUrls: ["./list-of-recipes.component.scss"],
})
export class ListOfRecipesComponent implements OnInit {
  recipes$: Observable<RecipeListModel[]>;
  public innerWidth: any;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @HostListener("window:resize")
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit() {
    const route = this.router.url;
    this.recipeService.getRecipeList(route);
    this.recipes$ = this.recipeService.getCurrentRecipeList();
    this.innerWidth = window.innerWidth;
  }
}
