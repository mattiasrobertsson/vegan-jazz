import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BreakfastComponent } from "./breakfast/breakfast.component";
import { InMemoryDataService } from "./in-memory-data.service";
import { ListOfRecipesComponent } from "./list-of-recipes/list-of-recipes.component";
import { PastaAndPizzaComponent } from "./pasta-and-pizza/pasta-and-pizza.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { SaladsComponent } from "./salads/salads.component";
import { DesktopMenuComponent } from "./shared/desktop-menu/desktop-menu.component";
import { MobileMenuComponent } from './shared/mobile-menu/mobile-menu/mobile-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    PastaAndPizzaComponent,
    SaladsComponent,
    BreakfastComponent,
    DesktopMenuComponent,
    ListOfRecipesComponent,
    MobileMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
