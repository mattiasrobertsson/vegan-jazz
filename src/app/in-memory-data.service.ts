import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { CookTime } from "./models";
import { Servings } from "./models/servings.enum";
import { TypeOfRecipe } from "./models/type-of-recipe.enum";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  // MAKE CONSTS OUT OF INGRIDIENTS ETC. FOR EXAMPLE PASTA AND GROUNDPEPPER.
  // const COOKTIME_45: '45 min';
  // STREET FOOD: VARMKORV, TACOS
  // PASTA: BLOMKÅLSPASTA, CARBOANARA, BOLOGNESE
  // BREAKFAST: SCRAMBLED TOFU, BANANA PANCAKES
  createDb() {
    const allRecipes = [
      // STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD
      // STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD
      // STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD
      {
        id: 100,
        name: "Hummus Raw-food Wrap",
        cookTime: CookTime.TEN,
        typeOfRecipe: TypeOfRecipe.STREET_FOOD,
        servings: Servings.TWO,
        ingredients: [
          {
            ingredient: "4 st medium tortillas, fullkorn",
            category: "basic",
          },
          {
            ingredient: "Hummus",
            category: "basic",
          },
          {
            ingredient: "Nymald svartpeppar",
            category: "spice",
          },
          {
            ingredient: "Chiliflakes",
            category: "spice",
          },
          {
            ingredient: "2 morötter",
            category: "basic",
          },
          {
            ingredient: "2/3 gurka",
            category: "basic",
          },
          {
            ingredient: "1 paprika",
            category: "basic",
          },
          {
            ingredient: "100-120 gram böngroddar",
            category: "basic",
          },
          {
            ingredient: "1 kruka mynta (alt. frusen mynta)",
            category: "basic",
          },
          {
            ingredient: "1 msk tahini (optional)",
            category: "basic",
          },
        ],
        image: "assets/STREETFOOD_hummuswrap.jpg",
        howTo: [
          {
            description:
              "Börja med att julienna (göra tunna stavar) av morötterna, gurkan och paprikan. Stryk på ett rikt lager med hummus i mitten av tortilla brödet.",
          },
          {
            description:
              "Krydda på lite nymald svartpeppar och chiliflakes på hummusen. Lägg sedan på  morots-, gurk- och paprikastavar. Strö på en drös med böngroddar.",
          },
          {
            description:
              "Lägg på rikligt med mynta och en matsked tahini. Servera!",
          },
        ],
      },
      {
        id: 101,
        name: "Bahn Mí",
        cookTime: CookTime.FORTY,
        typeOfRecipe: TypeOfRecipe.STREET_FOOD,
        servings: Servings.TWO,
        ingredients: [
          {
            ingredient: "1 baguette",
            category: "basic",
          },
          {
            ingredient: "2 msk olivolja",
            category: "basic",
          },
          {
            ingredient: "250 gram naturell tofu",
            category: "basic",
          },
          {
            ingredient: "1 medium rödlök",
            category: "basic",
          },
          {
            ingredient: "3 vitlöksklyftor",
            category: "basic",
          },
          {
            ingredient: "2 msk ljus soja (ex. kikkoman)",
            category: "basic",
          },
          {
            ingredient: "2,5 dl vatten",
            category: "basic",
          },
          {
            ingredient: "1 krm salt",
            category: "spice",
          },
          {
            ingredient: "peppar",
            category: "spice",
          },
          {
            ingredient: "6 msk majonäs",
            category: "basic",
          },
          {
            ingredient: "1 dl ättika (12%)",
            category: "basic",
          },
          {
            ingredient: "1/2 gurka",
            category: "basic",
          },
          {
            ingredient: "1 stor morot",
            category: "basic",
          },
          {
            ingredient: "15 cm rättika",
            category: "basic",
          },
          {
            ingredient: "sriracha",
            category: "topping",
          },
          {
            ingredient: "1 kruka färsk koriander",
            category: "topping",
          },
        ],
        image: "assets/STREETFOOD_bahnmi.jpg",
        imageFlag: "assets/flags/vietnam.png",
        howTo: [
          {
            description:
              "Börja med att skala och skiva mörotter och rättika i tunna skivor. Blanda sedan ättika, 2 dl vatten och socker och lägg ner morötterna och rättikan i denna.",
          },
          {
            description:
              "Skiva tofun i ca. 5 mm tjocka skivor. Hacka sedan löken och vitlöken grovt.",
          },
          {
            description:
              "Stek lök och vitlök i någon minut. Lägg sedan ner tofun i stekpannan och stek i några minuter tills den fått en gyllenbrunfärg.",
          },
          {
            description:
              "Tillsätt sedan soja, 1/2 dl vatten och rikligt med svartpeppar. Koka sedan tofun tills marinaden reducerats (ca. 10-15 minuter).",
          },
          {
            description:
              "Skiva gurkan och dela sedan baguetten på mitten. Skär bort en bit av dess kanter och snitta upp varje baguette på längden, så den fortfarande håller ihop utmed ena långkanten.",
          },
          {
            description:
              "Bred på ett rikligt lager med majonäs på baguettens under- och ovansida. Lägg sedan på gurka i botten. Lägg på tofun, morötter och rättika.",
          },
          {
            description: "Toppa med sriracha och koriander.",
          },
        ],
      },
      {
        id: 102,
        name: "Koreanska BBQ-Tacos",
        cookTime: CookTime.THIRTY,
        typeOfRecipe: TypeOfRecipe.STREET_FOOD,
        servings: Servings.THREE,
        ingredients: [
          {
            ingredient: "8 små tortillabröd",
            category: "basic",
          },
          {
            ingredient: "400 gram naturell tofu",
            category: "basic",
          },
          {
            ingredient: "2 vitlöksklyftor",
            category: "basic",
          },
          {
            ingredient: "1 dl gochujang",
            category: "basic",
          },
          {
            ingredient: "1/2 dl ketchup (osötad)",
            category: "basic",
          },
          {
            ingredient: "1/2 dl japansk soja",
            category: "basic",
          },
          {
            ingredient: "1 msk dadelsirap (eller socker)",
            category: "basic",
          },
          {
            ingredient: "1 msk äppelcidervinäger (eller annan vinäger)",
            category: "basic",
          },
          {
            ingredient: "svartpeppar",
            category: "spice",
          },
          {
            ingredient: "2 avokados (eller guacamole)",
            category: "topping",
          },
          {
            ingredient: "5 rädisor",
            category: "topping",
          },
          {
            ingredient: "3-4 salladslökar",
            category: "topping",
          },
          {
            ingredient: "1 burk kimchi",
            category: "topping",
          },
          {
            ingredient: "1 kruka koriander",
            category: "topping",
          },
          {
            ingredient: "2 lime",
            category: "topping",
          },
          {
            ingredient: "Sesamfrön",
            category: "topping",
          },
        ],

        image: "assets/STREETFOOD_koreanbbqtacos.jpg",
        imageFlag: "assets/flags/southkorea.png",
        howTo: [
          {
            description:
              "Börja med att blanda den koreanska grillsåsen. Blanda ketchup, gochujang, soja, äpplecidervinäger, dadelsirap, peppar och en riven vitlöksklyfta i en skål.",
          },
          {
            description:
              "Skär tofun i tärningar och lägg sedan ner dem i marinaden. Låt dra i några minuter.",
          },
          {
            description:
              "Stek sedan tofun på ganska hög värme i cirka 10 minuter. Medans, mosa avokado i en skål, skiva rädisorna och skär upp salladslöken.",
          },
          {
            description:
              "När tofun är färdig, smeta ut avokado på tacobrödet. Lägg sedan på tofun. Toppa med kimchi, rädisor, salladslök, koriander, sesamfrön och lime.",
          },
        ],
      },
      {
        id: 103,
        name: "Tasty Italian Burger",
        cookTime: CookTime.FIFTEEN,
        typeOfRecipe: TypeOfRecipe.STREET_FOOD,
        servings: Servings.TWO,
        ingredients: [
          {
            ingredient: "4 hamburgerbröd (gärna fullkorn)",
            category: "basic",
          },
          {
            ingredient: "2 msk olivolja",
            category: "basic",
          },
          {
            ingredient: "2 burgare (peas of heaven)",
            category: "basic",
          },
          {
            ingredient: "2 tsk basilikapesto",
            category: "topping",
          },
          {
            ingredient: "3-4 cocktailtomater",
            category: "topping",
          },
          {
            ingredient: "1 näve ruccola",
            category: "topping",
          },
          {
            ingredient: "1/2 balsamicostekt rödlök",
            category: "topping",
          },
          {
            ingredient: "peppar",
            category: "spice",
          },
          {
            ingredient: "2 msk majonäs",
            category: "topping",
          },
        ],
        image: "assets/STREETFOOD_tastyitalian.jpg",
        imageFlag: "assets/flags/italy.png",
        howTo: [
          {
            description:
              "Börja med att skära rödlöken i tunna halvskivor, stek den sedan i balsamico.",
          },
          {
            description:
              "Skölj av stekpannan och stek burgarna i olivolja. Peppra. Skiva cocktailtomaterna och lägg sedan på all topping. Eat!",
          },
        ],
      },
      {
        id: 104,
        name: "Vegansk tuna melt sandwich",
        cookTime: CookTime.FIFTEEN,
        typeOfRecipe: TypeOfRecipe.STREET_FOOD,
        servings: Servings.THREE,
        ingredients: [
          {
            ingredient: "4 st surdegsbröd",
            category: "basic",
          },
          {
            ingredient: "390 gram kikärtor",
            category: "basic",
          },
          {
            ingredient: "1/2 paprika",
            category: "basic",
          },
          {
            ingredient: "1/2 rödlök",
            category: "basic",
          },
          {
            ingredient: "1 morot (riven)",
            category: "basic",
          },
          {
            ingredient: "2-3 msk veganmajo",
            category: "basic",
          },
          {
            ingredient: "1-2 msk tamari eller soja",
            category: "basic",
          },
          {
            ingredient: "2 tsk kapris",
            category: "basic",
          },
          {
            ingredient: "2 msk limejuice",
            category: "basic",
          },
          {
            ingredient: "1 msk b-jäst",
            category: "basic",
          },
          {
            ingredient: "peppar",
            category: "spice",
          },
          {
            ingredient: "1 tomat",
            category: "topping",
          },
          {
            ingredient: "Sallat/Grönsallat",
            category: "topping",
          },
        ],
        image: "assets/STREETFOOD_tunamelt.jpg",
        imageFlag: "assets/flags/usa.png",
        howTo: [
          {
            description:
              "Töm ner kikärtorna i ett durkslag och skölj av dem. Häll sedan ned dem i en bunke och mosa med gaffel eller sked.",
          },
          {
            description:
              "Finhacka löken och paprikan och häll ner dessa i bunken. Riv också ned en morot. Rör om.",
          },
          {
            description:
              "Tillsätt majonnäs, tamari/soja, kapris, limejuice och b-jäst. Peppra och smaka av.",
          },
          {
            description:
              "Rosta brödet, skiva sedan tomaten och bygg ihop smörgåsen enligt bild.",
          },
        ],
      },
      {
        id: 105,
        name: "Halloumiwraps",
        cookTime: CookTime.THIRTY,
        typeOfRecipe: TypeOfRecipe.STREET_FOOD,
        servings: Servings.TWO,
        ingredients: [
          {
            ingredient: "2 st librabröd",
            category: "basic",
          },
          {
            ingredient: "200 gram halloumi",
            category: "basic",
          },
          {
            ingredient: "hummus",
            category: "basic",
          },
          {
            ingredient: "tzatsiki (länk till recept)",
            category: "basic",
          },
          {
            ingredient: "torkad oregano",
            category: "spice",
          },
          {
            ingredient: "chiliflakes",
            category: "spice",
          },
          {
            ingredient: "nymald svartpeppar",
            category: "spice",
          },
          {
            ingredient: "6 st cocktailtomater",
            category: "basic",
          },
          {
            ingredient: "6 st halkidikioliver",
            category: "basic",
          },
          {
            ingredient: "några blad romansallad",
            category: "basic",
          },
          {
            ingredient: "1 liten rödlök",
            category: "basic",
          },
        ],
        image: "assets/STREETFOOD_halloumiwrap.jpg",
        imageFlag: "assets/flags/greece.png",
        howTo: [
          {
            description:
              "Tärna halloumin i mindre fyrkantiga bitar och stek i olivolja tills den får en gyllenbrun färg",
          },
          {
            description:
              "Blanda ihop en tzatsiki och hummus. Alternativt köp färdiga",
          },
          {
            description:
              "Dela cocktailtomaterna i i 4 delar och halvera oliverna. Strimla romansalladen och skär rödlöken i tunna halvskivor",
          },
          {
            description:
              "När allt är färdigt, börja med att stryka på ett lager hummus i botten på librabrödet. Krydda sedan med lite oregano och chiliflakes",
          },
          {
            description:
              "Lägg sedan på halloumin och resterande av ingredienserna. Toppas av med tzatsiki  och nymald svartpepper. Rulla ihop brödet och gå lös!",
          },
        ],
      },
      // GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA
      // GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA
      // GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA
      {
        id: 200,
        name: "Masoor Dal (Linsgryta)",
        cookTime: CookTime.FORTY_FIVE,
        typeOfRecipe: TypeOfRecipe.STEWS_AND_SOUPS,
        servings: Servings.FOUR,
        ingredients: [
          {
            ingredient: "4 portioner ris",
            category: "basic",
          },
          {
            ingredient: "2 msk olivolja",
            category: "basic",
          },
          {
            ingredient: "1 stor röd lök",
            category: "basic",
          },
          {
            ingredient: "2 vitlöksklyftor",
            category: "basic",
          },
          {
            ingredient: "2 medium morötter",
            category: "basic",
          },
          {
            ingredient: "3,5 dl röda linser",
            category: "basic",
          },
          {
            ingredient: "390 g krossade tomater",
            category: "basic",
          },
          {
            ingredient: "400 ml kokosmjölk",
            category: "basic",
          },
          {
            ingredient: "1 grönsaksbuljongstärning",
            category: "basic",
          },
          {
            ingredient: "2 dl vatten",
            category: "basic",
          },
          {
            ingredient: "50 g bladspenat",
            category: "basic",
          },
          {
            ingredient: "2 tsk koriander",
            category: "spice",
          },
          {
            ingredient: "2 tsk ingefära",
            category: "spice",
          },
          {
            ingredient: "1 tsk spiskummin",
            category: "spice",
          },
          {
            ingredient: "2 krm kanel",
            category: "spice",
          },
          {
            ingredient: "salt",
            category: "spice",
          },
          {
            ingredient: "1 lime",
            category: "topping",
          },
          {
            ingredient: "1 näve hackade cashewnötter",
            category: "topping",
          },
          {
            ingredient: "Sambal oelek",
            category: "topping",
          },
        ],
        image: "assets/GRYTOR&SOPPA_daalmasoor.jpg",
        imageFlag: "assets/flags/india.png",
        howTo: [
          {
            description:
              "Hacka lök, vitlök och skiva upp morötterna. Stek i olivolja i några minuter.",
          },
          {
            description: "Tillsätt alla kryddor förutom salt och rör om.",
          },
          {
            description:
              "Rör ner krossade tomater, kokosmjölk, vatten och grönsaksbuljong. Rör om och tillsätt linserna.",
          },
          {
            description:
              "Koka på låg värme under lock i cirka 15 minuter. Glöm ej att röra om emellanåt så linserna inte fastnar i botten.",
          },
          {
            description:
              " Tillsätt därefter babyspenaten. Rör om och låt det koka i ca 5 minuter till. Salta och krydda mer om det behövs. Smaka av.",
          },
          {
            description:
              "Servera med ris, lime, hackade cashewnötter och sambal oelek.",
          },
        ],
      },
      {
        id: 201,
        name: "Khao soi (Nudelsoppa)",
        cookTime: CookTime.THIRTY,
        typeOfRecipe: TypeOfRecipe.STEWS_AND_SOUPS,
        servings: Servings.THREE,
        ingredients: [
          {
            ingredient: "1 stor röd lök",
            category: "basic",
          },
          {
            ingredient: "6 vitlöksklyftor",
            category: "basic",
          },
          {
            ingredient: "2 tsk ingefära",
            category: "spice",
          },
          {
            ingredient: "1-2 msk röd currypasta",
            category: "basic",
          },
          {
            ingredient: "2 tsk curry",
            category: "spice",
          },
          {
            ingredient: "1 tsk gurkmeja",
            category: "spice",
          },
          {
            ingredient: "1 liter grönsaksbuljong",
            category: "basic",
          },
          {
            ingredient: "2,5 dl kokosmjölk",
            category: "basic",
          },
          {
            ingredient: "3 msk japansk soja",
            category: "basic",
          },
          {
            ingredient: "1 msk dadelsirap (alt. socker)",
            category: "basic",
          },
          {
            ingredient: "1/2 lime",
            category: "basic",
          },
          {
            ingredient: "180 g risnudlar",
            category: "basic",
          },
          {
            ingredient: "1 kruka koriander",
            category: "topping",
          },
          {
            ingredient: "1/2 lime",
            category: "topping",
          },
          {
            ingredient: "1/2 dl hackade jordnötter",
            category: "topping",
          },
          {
            ingredient: "tofu (optional)",
            category: "basic",
          },
        ],
        image: "assets/GRYTOR&SOPPA_khaosoi.jpg",
        imageFlag: "assets/flags/laos.png",
        howTo: [
          {
            description: "Koka upp 1 liter grönsaksbuljong.",
          },
          {
            description:
              "Stek därefter tofun i olivolja, 2 hackade vitlöksklyftor och 1 msk soja tills den får färg. Lägg den sedan i en skål.",
          },
          {
            description:
              "Hacka lök och resten av vitlöksklyftorna och stek dem därefter i ca 3 minuter i en gryta.",
          },
          {
            description:
              "Tillsätt currypasta, currykrydda, ingefäraskrydda, gurkmeja och kokosmjölk. Tillsätt också grönsaksbuljongen.",
          },
          {
            description:
              "Koka upp och låt koka i 5 minuter. Lägg sedan till soja, limejuice från 1/2 lime och dadelsirap. Dra ner värmen och låt koka i 3 minuter till.",
          },
          {
            description:
              "Lägg ner nudlarna i soppan och koka i 2 minuter till. Servera med koriander, lime och hackade jordnötter.",
          },
        ],
      },
      {
        id: 202,
        name: "Dal Shorva",
        cookTime: CookTime.THIRTY,
        typeOfRecipe: TypeOfRecipe.STEWS_AND_SOUPS,
        servings: Servings.FOUR,
        ingredients: [
          {
            ingredient: "1.5 liter grönsaksbuljong",
            category: "basic",
          },
          {
            ingredient: "3,5 dl linser (röda/gula)",
            category: "basic",
          },
          {
            ingredient: "1 tsk gurkmeja",
            category: "spice",
          },
          {
            ingredient: "1 tsk kummin (frön)",
            category: "spice",
          },
          {
            ingredient: "1/2 tsk cayennepeppar",
            category: "spice",
          },
          {
            ingredient: "1/4 tsk kardemumma",
            category: "spice",
          },
          {
            ingredient: "3 st lagerblad",
            category: "spice",
          },
          {
            ingredient: "2 tsk senapsfrön",
            category: "spice",
          },
          {
            ingredient: "2 tsk grönsaksfond",
            category: "basic",
          },
          {
            ingredient: "Peppar",
            category: "spice",
          },
          {
            ingredient: "4 st vitlöksklyftor",
            category: "basic",
          },
          {
            ingredient: "1/2 citron",
            category: "basic",
          },
          {
            ingredient: "Färsk koriander (optional)",
            category: "topping",
          },
          {
            ingredient: "Rödlök (optional)",
            category: "topping",
          },
        ],
        image: "assets/GRYTOR&SOPPA_dalshorva.jpg",
        imageFlag: "assets/flags/india.png",
        howTo: [
          {
            description:
              "Koka upp 1.5 liter buljong och tillsätt linserna. Tillsätt därefter alla kryddor förutom senapsfröna och peppar.",
          },
          {
            description:
              "Låt koka i cirka 25 minuter, rör då och då. Tillsätt därefter grönsaksfond och koka i någon minut till.",
          },
          {
            description:
              "Skär vitlöken i lite större bitar och stek den med senapsfröna i cirka 2 minuter. Tillsätt dem sedan till soppan.",
          },
          {
            description:
              "Peppra och kläm ner saften från en halva citron. Rör om. Toppa gärna rätten med färsk koriander och rödlök.",
          },
        ],
      },
      {
        id: 203,
        name: "Broccoli & kikärts-fry",
        cookTime: CookTime.THIRTY,
        typeOfRecipe: TypeOfRecipe.STEWS_AND_SOUPS,
        servings: Servings.TWO,
        ingredients: [
          {
            ingredient: "2 portioner ris",
            category: "basic",
          },
          {
            ingredient: "1 msk olivolja",
            category: "basic",
          },
          {
            ingredient: "1 rödlök",
            category: "basic",
          },
          {
            ingredient: "5 vitlöksklyftor",
            category: "basic",
          },
          {
            ingredient: "1 medium broccoli",
            category: "basic",
          },
          {
            ingredient: "1 dl grönsaksbuljong",
            category: "basic",
          },
          {
            ingredient: "1 burk kikärtor (390 gram)",
            category: "basic",
          },
          {
            ingredient: "1.5 dl vatten",
            category: "basic",
          },
          {
            ingredient: "2 msk soja",
            category: "basic",
          },
          {
            ingredient: "1.5 msk balsamvinäger",
            category: "basic",
          },
          {
            ingredient: "0.5 msk dadelsirap (alt socker)",
            category: "basic",
          },
          {
            ingredient: "1/2 msk ingefära",
            category: "spice",
          },
          {
            ingredient: "1 tsk paprika",
            category: "spice",
          },
          {
            ingredient: "1/2 tsk smoked paprika",
            category: "spice",
          },
          {
            ingredient: "1 nypa cayennepeppar",
            category: "spice",
          },
          {
            ingredient: "1 msk arrowrot",
            category: "spice",
          },
          {
            ingredient: "Nymald svartpeppar",
            category: "spice",
          },
          {
            ingredient: "rädisor (optional)",
            category: "topping",
          },
        ],
        image: "assets/GRYTOR&SOPPA_broccoli&kikartsfry.jpg",
        howTo: [
          {
            description:
              "Börja med att dela upp broccolin i mindre delar. Hacka sedan lök, vitlök och stek dem sedan med broccolin i olivolja ett par minuter. Tillsätt alla kryddor förutom arrowrot.",
          },
          {
            description:
              "Tillsätt sedan grönsaksbuljongen. Stek dem i cirka 6-7 minuter.",
          },
          {
            description:
              "Medans broccolin steks, vispa ihop vatten, soja, vinäger, dadelsirap och arrowrot i en skål. Häll sedan ner denna blandning i stekpannan. Tillsätt också kikärtorna.",
          },
          {
            description:
              "Låt detta steka ihop i några minuter. Servera med ris!",
          },
        ],
      },
      {
        id: 204,
        name: "Gazpacho m/ rostat Levainbröd",
        cookTime: CookTime.TWENTY,
        typeOfRecipe: TypeOfRecipe.STEWS_AND_SOUPS,
        servings: Servings.FOUR,
        ingredients: [
          {
            ingredient: "1 kg tomater",
            category: "basic",
          },
          {
            ingredient: "1/2 rödlök",
            category: "basic",
          },
          {
            ingredient: "2 vitlöksklyftor",
            category: "basic",
          },
          {
            ingredient: "1 liten gurka",
            category: "basic",
          },
          {
            ingredient: "1 röd paprika",
            category: "basic",
          },
          {
            ingredient: "5 st halkidikioliver",
            category: "basic",
          },
          {
            ingredient: "2 msk olivolja",
            category: "basic",
          },
          {
            ingredient: "0.5 dl basilika",
            category: "basic",
          },
          {
            ingredient: "2 msk olivolja",
            category: "basic",
          },
          {
            ingredient: "2 msk balsamvinäger",
            category: "basic",
          },
          {
            ingredient: "2 msk rödvin (optional)",
            category: "basic",
          },
          {
            ingredient: "1/2 - 1 tsk salt",
            category: "spice",
          },
          {
            ingredient: "Nymald svartpeppar",
            category: "spice",
          },
          {
            ingredient: "4 skivor levainbröd",
            category: "topping",
          },
          {
            ingredient: "1 pkt kidneybönor",
            category: "topping",
          },
        ],
        image: "assets/GRYTOR&SOPPA_gazpacho.jpg",
        imageFlag: "assets/flags/spain.png",
        howTo: [
          {
            description:
              "Börja med att grovt hacka tomater, rödlök, vitlök och paprika. Dela sedana gurkan på längden och gröp ur dess vattniga mittendel. Hacka även den grovt. Halvera oliverna.",
          },
          {
            description:
              "Dela upp allt du hackat i två lika delar. Den ena hälften stoppar du ner i mixern och den andra lägger du åt sidan.",
          },
          {
            description:
              "Tillsätt olivolja, balsamvinäger, rödvin, basilika, 1/2 tsk salt och nymald peppar. Mixa ihop tills det inte finns några bitar kvar i soppan.",
          },
          {
            description:
              "Tillsätt sedan den andra hälften av dina hackade grönsaker och kör mixern igen men stanna innan soppan är helt slät. Lite små bitar av grönsakerna kan finnas kvar i soppan.",
          },
          {
            description:
              "Tillsätt lite mer salt tills du är nöjd. Servera soppan med ett gott levainbröd och kidneybönor (för protein) toppade med flingsalt.",
          },
        ],
      },
      {
        id: 205,
        name: "Sötpotatissoppa med apelsin & chili",
        cookTime: CookTime.THIRTY,
        typeOfRecipe: TypeOfRecipe.STEWS_AND_SOUPS,
        servings: Servings.FOUR,
        ingredients: [
          {
            ingredient: "1 gul lök",
            category: "basic",
          },
          {
            ingredient: "2 vitlöksklyftor",
            category: "basic",
          },
          {
            ingredient: "1 scharlottenlök",
            category: "basic",
          },
          {
            ingredient: "1 chili (piri piri)",
            category: "basic",
          },
          {
            ingredient: "1 sötpotatis",
            category: "basic",
          },
          {
            ingredient: "5-6 morötter",
            category: "basic",
          },
          {
            ingredient: "3-4 cm ingefära",
            category: "basic",
          },
          {
            ingredient: "1 buljongtärning",
            category: "basic",
          },
          {
            ingredient: "2 msk grönsaksfond",
            category: "basic",
          },
          {
            ingredient: "1 burk kokosmjölk",
            category: "basic",
          },
          {
            ingredient: "1 apelsin",
            category: "basic",
          },
          {
            ingredient: "Vatten",
            category: "basic",
          },
        ],
        image: "assets/GRYTOR&SOPPA_sotpotatissoppa.jpg",
        howTo: [
          {
            description:
              "Börja med att hacka upp sötpotatisen i bitar på 3-4 cm. Skala morötterna och hacka i skivor. Skala ingefära.",
          },
          {
            description:
              "Hacka och stek all lök samt chilin i en gryta i 2 minuter. Tillsätt därefter ingefäran samt sötpotatis- och morotsbitarna. Stek ytterligare några minuter",
          },
          {
            description:
              "Häll sedan i vatten så att det precis täcker grönsakerna. Tillsätt buljonstärning samt grönsaksfond",
          },
          {
            description:
              "Häll även ner kokosmjölken. Riv ner apelsinzest i soppan och pressa sedan ner apelsinsaften i den. Koka tills allt är mjukt",
          },
          {
            description:
              "Mixa allt med en stavmixer. Späd sedan ut soppan med vatten till önskad konsistens",
          },
        ],
      },
      {
        id: 206,
        name: "Chickpea Red Curry",
        cookTime: CookTime.THIRTY,
        typeOfRecipe: TypeOfRecipe.STEWS_AND_SOUPS,
        servings: Servings.TWO,
        ingredients: [
          {
            ingredient: "2 portioner ris",
            category: "basic",
          },
          {
            ingredient: "2 medium rödlökar",
            category: "basic",
          },
          {
            ingredient: "2-3 vitlöksklyftor",
            category: "basic",
          },
          {
            ingredient: "1-2 msk red curry paste",
            category: "basic",
          },
          {
            ingredient: "3 medium tomater",
            category: "basic",
          },
          {
            ingredient: "1 paket kikärtor (390 gram)",
            category: "basic",
          },
          {
            ingredient: "1 burk kokosmjölk",
            category: "basic",
          },
          {
            ingredient: "2 dl vatten",
            category: "basic",
          },
          {
            ingredient: "2 msk limejuice",
            category: "basic",
          },
          {
            ingredient: "2 msk soja",
            category: "basic",
          },
          {
            ingredient: "1 tsk dadelsirap (eller socker)",
            category: "basic",
          },
          {
            ingredient: "1 kruka basilika",
            category: "basic",
          },
          {
            ingredient: "1 näve sockerärtor (optional)",
            category: "basic",
          },
        ],
        image: "assets/GRYTOR&SOPPA_kikartscurry.jpg",
        howTo: [
          {
            description: "Börja med att koka riset.",
          },
          {
            description:
              "Hacka sedan all lök och stek den i ett par minuter. Tillsätt och curry paste och låt den smälta/blandas ut i stekpannan.",
          },
          {
            description:
              "Hacka tomaterna i större bitar och fräs på i någon minut. Tillsätt därefter kokosmjölken, kikärtorna och 2 dl vatten. Koka upp.",
          },
          {
            description:
              "Tillsätt limejuice, sojasås och basilika och sockerärtor. Koka i ytterligare ett par minuter. Servera med riset.",
          },
        ],
      },
      {
        id: 207,
        name: "Fasolada med levainbröd",
        cookTime: CookTime.THIRTY,
        typeOfRecipe: TypeOfRecipe.STEWS_AND_SOUPS,
        servings: Servings.THREE,
        ingredients: [
          {
            ingredient: "Olivolja",
            category: "basic",
          },
          {
            ingredient: "1 lök (gul)",
            category: "basic",
          },
          {
            ingredient: "3 st morötter",
            category: "basic",
          },
          {
            ingredient: "2 st selleristjälkar",
            category: "basic",
          },
          {
            ingredient: "3-4 msk tomatpuré",
            category: "basic",
          },
          {
            ingredient: "1 grönsaksbuljonstärning",
            category: "basic",
          },
          {
            ingredient: "1 tsk paprikapulver",
            category: "spice",
          },
          {
            ingredient: "1 tsk rosmarin",
            category: "spice",
          },
          {
            ingredient: "2 st lagerblad",
            category: "spice",
          },
          {
            ingredient: "5 dl vatten",
            category: "basic",
          },
          {
            ingredient: "1 tetra cannelinibönor (380 gram)",
            category: "basic",
          },
          {
            ingredient: "salt",
            category: "spice",
          },
          {
            ingredient: "svartpeppar",
            category: "spice",
          },
          {
            ingredient: "fetaost",
            category: "topping",
          },
          {
            ingredient: "kalamataoliver",
            category: "topping",
          },
          {
            ingredient: "surdegsbröd",
            category: "topping",
          },
          {
            ingredient: "chiliflakes",
            category: "topping",
          },
          {
            ingredient: "färsk timjan (optional)",
            category: "topping",
          },
        ],
        image: "assets/GRYTOR&SOPPA_fasolada.jpg",
        imageFlag: "assets/flags/greece.png",
        howTo: [
          {
            description:
              "Börja med att hacka löken och skära morötterna i slantar och sellerin i tärningar. Stek i olivolja i några minuter.",
          },
          {
            description:
              "Tillsätt tomatpuré och stek ytterligare någon minut. Vänd ner alla kryddorna (förutom salt och peppar) och smula ner grönsaksbuljongtärningen. Tillsätt vatten och koka i 15 minuter. ",
          },
          {
            description:
              "Sila bort spaden från de vita bönorna och tillsätt dem till grytan. Koka i några minuter till och tillsätt nymald peppar.",
          },
          {
            description:
              "Servera med surdegsbröd, fetaost, kalamataoliver, timjan och chiliflakes för maximal grekisk upplevelse.",
          },
        ],
      },
      // BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS
      // BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS
      // BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS
      /* {
        id: 200,
        name: "Japansk edamame- & tofubowl",
        cookTime: CookTime.THIRTY,
        typeOfRecipe: TypeOfRecipe.BOWL,
        servings: Servings.THREE,
        ingredients: [
          {
            ingredient: "2 portioner Ris / Sushiris",
            category: "basic",
          },
          {
            ingredient: "30 gram machésallat",
            category: "basic",
          },
          {
            ingredient: "1 dl edamamebönor",
            category: "basic",
          },
          {
            ingredient: "1 dl mango",
            category: "basic",
          },
          {
            ingredient: "1 avokado",
            category: "basic",
          },
          {
            ingredient: "1 morot",
            category: "basic",
          },
          {
            ingredient: "1/2 gurka",
            category: "basic",
          },
          {
            ingredient: "Färdigmarinerad tofu",
            category: "basic",
          },
          {
            ingredient: "Peppar",
            category: "spice",
          },
          {
            ingredient: "2 tsk sesamfrön",
            category: "topping",
          },
          {
            ingredient: "1/2 kruka koriander",
            category: "topping",
          },
          {
            ingredient: "Shoyu-soja",
            category: "topping",
          },
          {
            ingredient: "Srirachamajonnäs",
            category: "topping",
          },
        ],
        image: "assets/PASTA&PIZZA_alfredo.jpg",
        imageFlag: "assets/flags/japan.png",
        howTo: [
          {
            description: "Börja med att skölja och koka riset.",
          },
          {
            description:
              "Medan det kokar, hacka morötter och gurka samt tina edamamebönorna och mangon. Skiva sedan avokadon.",
          },
          {
            description:
              "Hacka tofun och stek. Häll ner lite soja på tofun medans den steker. Peppra.",
          },
          {
            description:
              "Servera sedan allt i en skål. Toppa med koriander, shoyu, srirachamajonnäs och sesamfrön.",
          },
        ],
      }, */
      {
        id: 300,
        name: "Bibimbap",
        cookTime: CookTime.FORTY_FIVE,
        typeOfRecipe: TypeOfRecipe.BOWL,
        servings: Servings.TWO,
        ingredients: [
          {
            ingredient: "2 portioner jasminris",
            category: "basic",
          },
          {
            ingredient: "4-6 Rädisor",
            category: "basic",
          },
          {
            ingredient: "2 medium morötter",
            category: "basic",
          },
          {
            ingredient: "270g tofu",
            category: "basic",
          },
          {
            ingredient: "0.5 dl gochujang",
            category: "basic",
          },
          {
            ingredient: "0.25 dl ketchup (osötad)",
            category: "basic",
          },
          {
            ingredient: "1 vitlöksklyfta",
            category: "basic",
          },
          {
            ingredient: "0.25 dl japansk soja",
            category: "basic",
          },
          {
            ingredient: "1/2 msk äppelcidervinäger",
            category: "basic",
          },
          {
            ingredient: "1,5 msk dadelsirap (eller socker)",
            category: "basic",
          },
          {
            ingredient: "150g Shiitakesvamp",
            category: "basic",
          },
          {
            ingredient: "1 broccoli",
            category: "basic",
          },
          {
            ingredient: "1/2 gurka",
            category: "basic",
          },
          {
            ingredient: "0.5 dl vatten",
            category: "basic",
          },
          {
            ingredient: "1.5 msk ättika",
            category: "basic",
          },
          {
            ingredient: "Chili",
            category: "basic",
          },
          {
            ingredient: "Svartpeppar",
            category: "spice",
          },
          {
            ingredient: "Kimchi",
            category: "topping",
          },
          {
            ingredient: "Sesamfrön",
            category: "topping",
          },
        ],
        image: "assets/BOWLS_bibimbap.jpg",
        imageFlag: "assets/flags/southkorea.png",
        howTo: [
          {
            description:
              "Börja med att blanda vatten, ättika, 1 msk dadelsirap (eller socker) och chili en skål. Skär sedan gurkan i tunna bitar och lägg ner i laget.",
          },
          {
            description:
              "Hacka vitlöksklyftan och blanda den ner den med gochujang, ketchup, soja, vitvinsvinäger, 1/2 msk dadelsirap och svartpeppar i en ny skål. Skär tofun i tärningar och lägg ner i marinaden.",
          },
          {
            description:
              "Skiva svampen och stek den i olivolja tills i cirka 6-7 minuter. Salta, peppra och rör om. Häll upp svampen i en djuptallrik.",
          },
          {
            description:
              "Sätt igång riset. Medan, skär broccolin i buketter. Skär morötter i tunna stavar och skiva rädisorna.",
          },
          {
            description:
              "Stek den marinerade tofun i cirka 8 minuter. Ångoka också broccolin tills den mjuknat.",
          },
          {
            description: "Servera bibimbapen toppad med sesamfrön och kimchi.",
          },
        ],
      },
      {
        id: 301,
        name: "Green Pesto Quinoa Bowl",
        cookTime: CookTime.TWENTY,
        typeOfRecipe: TypeOfRecipe.BOWL,
        servings: Servings.TWO,
        ingredients: [
          {
            ingredient: "röd quinoa",
            category: "basic",
          },
          {
            ingredient: "2 vitlöksklyftor",
            category: "basic",
          },
          {
            ingredient: "1/2 blomkålshuvud (stek i vitlöken)",
            category: "basic",
          },
          {
            ingredient: "2 dl gröna ärtor",
            category: "basic",
          },
          {
            ingredient: "soltorkade tomater",
            category: "basic",
          },
          {
            ingredient: "cocktailtomater",
            category: "basic",
          },
          {
            ingredient: "1 msk b-jäst",
            category: "basic",
          },
          {
            ingredient: "grön pesto",
            category: "topping",
          },
          {
            ingredient: "Valnötter",
            category: "topping",
          },
          {
            ingredient: "Vegansk parmesan",
            category: "topping",
          },
        ],
        image: "assets/BOWLS_greenquinoapesto.jpg",
        imageFlag: "assets/flags/peru.png",
        howTo: [
          {
            description:
              "Börja med att koka 2 portioner quinoa och skära upp blomkålen i mindre buketter. Hacka sedan vitlöken.",
          },
          {
            description:
              "Medans quinoan kokar, stek blomkålen i olivolja och vitlök tills den får färg. Tina ärtorna och dela cocktailtomaterna i fyror.",
          },
          {
            description:
              "Innan du serverar, lägg ner alla ingredienser i en skål och hacka ett gäng valnötter som toppning. Klipp även ner några soltorkade tomater.",
          },
        ],
      },
      {
        id: 302,
        name: "Mexican Bean Bowl",
        cookTime: CookTime.TWENTY,
        typeOfRecipe: TypeOfRecipe.BOWL,
        servings: Servings.TWO,
        ingredients: [
          {
            ingredient: "2 portioner ris/råris",
            category: "basic",
          },
          {
            ingredient: "250-300 gram svarta bönor",
            category: "basic",
          },
          {
            ingredient: "150 gram majs",
            category: "basic",
          },
          {
            ingredient: "6-7 cocktailtomater",
            category: "basic",
          },
          {
            ingredient: "1 avokado",
            category: "basic",
          },
          {
            ingredient: "7-8 st jalapeño",
            category: "basic",
          },
          {
            ingredient: "2 limeklyftor",
            category: "topping",
          },
          {
            ingredient: "2 dl vegmajo",
            category: "topping",
          },
          {
            ingredient: "1 tsk tabasco (chipotle)",
            category: "topping",
          },
          {
            ingredient: "Färsk koriander",
            category: "topping",
          },
        ],
        image: "assets/BOWLS_mexicanbeanbowl.jpg",
        imageFlag: "assets/flags/mexico.png",
        howTo: [
          {
            description:
              "Koka 2 portioner ris. Medan riset kokar, blanda vegmajonnäs och tabasco i en skål.",
          },
          {
            description:
              "Dela cocktailtomaterna i fyror och skiva sedan limen och avokadon. Skölj majsen och bönorna.",
          },
          {
            description:
              "Lägg ner allt i en djuptallrik eller skål och toppa med jalapeño, chiptolemajo, koriander och lime.",
          },
        ],
      },
      {
        id: 303,
        name: "Gochujang Noodles",
        cookTime: CookTime.THIRTY,
        typeOfRecipe: TypeOfRecipe.BOWL,
        servings: Servings.TWO,
        ingredients: [
          {
            ingredient: "200 gram sötpotatisnudlar (vermicelli)",
            category: "basic",
          },
          {
            ingredient: "1/4 gurka",
            category: "topping",
          },
          {
            ingredient: "2 st salladslök",
            category: "topping",
          },
          {
            ingredient: "1 näve hackade nötter",
            category: "topping",
          },
          {
            ingredient: "50 gram böngroddar",
            category: "topping",
          },
          {
            ingredient: "1 kruka koriander",
            category: "topping",
          },
          {
            ingredient: "2 msk gochujangpaste",
            category: "basic",
          },
          {
            ingredient: "2 msk olivolja",
            category: "basic",
          },
          {
            ingredient: "2 msk limejuice",
            category: "basic",
          },
          {
            ingredient: "2 msk hoisinsås",
            category: "basic",
          },
          {
            ingredient: "1 vitlöksklyfta",
            category: "basic",
          },
        ],
        image: "assets/BOWLS_gochujangnoodles.jpg",
        imageFlag: "assets/flags/southkorea.png",
        howTo: [
          {
            description:
              "Blanda olivolja, soja, lime, risvinäger, dadelsirap, riven vitlök och -ingefära samt chili flakes i en liten skål. Ställ sedan in dressingen i kylen.",
          },
        ],
      },
      {
        id: 304,
        name: "Sötpotatis & Grönkålsbowl",
        cookTime: CookTime.FORTY_FIVE,
        typeOfRecipe: TypeOfRecipe.BOWL,
        servings: Servings.TWO,
        ingredients: [
          {
            ingredient: "1 liten/medium sötpotatis",
            category: "basic",
          },
          {
            ingredient: "1 dl quinoa (röd eller vit)",
            category: "basic",
          },
          {
            ingredient: "??? gram grönkål",
            category: "basic",
          },
          {
            ingredient: "2-3 st rädisor",
            category: "basic",
          },
          {
            ingredient: "1 avokado",
            category: "basic",
          },
          {
            ingredient: "1/2 näve mandlar",
            category: "topping",
          },
          {
            ingredient: "hampafrön (optional)",
            category: "topping",
          },
        ],
        image: "assets/BOWLS_sweetpotato_quinoa.jpg",
        howTo: [
          {
            description:
              "Börja med att skala sötpotatisen. Skär den sedan i kuber eller trianglar. Lägg på en plåt tillsammans med olivolja och salt och ugnsbaka på 225° i cirka 30-40 minuter.",
          },
          {
            description:
              "Koka quinoan enligt förpackning. Skölj, rensa och hacka sedan grönkålen. Skär sedan rädisorna i månar eller halvmånar. Hacka mandlarna.",
          },
          {
            description:
              "Innan servering, dela avokadon i två och skär i halvmånar. Servera allt i en djuptallrik med quinoa i botten. Ringla dressingen över. Glöm ej att toppa med hampafrön.",
          },
          {
            description:
              "SPICY LEMON DRESSING: 0.4 dl olivolja, 2 msk citronjuice, 1.5 tsk vitvinsvinäger, 1/4 tsk chiliflakes, salt, peppar",
          },
          // SPICY LEMON DRESSING: 0.4 dl olivolja, 2 msk citronjuice, 1.5 tsk vitvinsvinäger, 1/4 tsk chiliflakes, salt, peppar
        ],
      },
      {
        id: 305,
        name: "Spicy Rice & Lentils",
        cookTime: CookTime.THIRTY,
        typeOfRecipe: TypeOfRecipe.BOWL,
        servings: Servings.TWO,
        ingredients: [
          {
            ingredient: "0.75 dl fullkornsris",
            category: "basic",
          },
          {
            ingredient: "0.75 dl basmatiris",
            category: "basic",
          },
          {
            ingredient: "1 dl gröna linser",
            category: "basic",
          },
          {
            ingredient: "1 rödlök",
            category: "basic",
          },
          {
            ingredient: "2 vitlöksklyftor",
            category: "basic",
          },
          {
            ingredient: "1/2 tsk chiliflakes",
            category: "spice",
          },
          {
            ingredient: "1 tsk sju kryddor",
            category: "spice",
          },
          {
            ingredient: "1 tsk gurkmeja",
            category: "spice",
          },
          {
            ingredient: "Svartpeppar",
            category: "spice",
          },
          {
            ingredient: "Salt",
            category: "spice",
          },
          {
            ingredient: "1 dl turkisk yoghurt",
            category: "topping",
          },
          {
            ingredient: "2 msk limejuice",
            category: "topping",
          },
          {
            ingredient: "1 tsk honung",
            category: "topping",
          },
          {
            ingredient: "1 tsk sambal oelek (optional)",
            category: "topping",
          },
        ],
        image: "assets/BOWLS_spicyriceandlentils.jpg",
        howTo: [
          {
            description:
              "Börja med att blötlägga de gröna linserna (se förpackning för längd)",
          },
          {
            description:
              "Skölj riset i vatten och koka det sedan. Koka även de gröna linserna. Medan detta kokar, hacka upp lök och vitlök",
          },
          {
            description:
              "När riset börjar bli färdigt, stek all lök tills de fått färg. Tillsätt sedan de färdigkokade riset samt linserna i stekpannan. Tillsätt alla kryddor. Vänd ett par gånger och ta sedan av från värmen",
          },
          {
            description:
              "Mixa 1 dl grekisk yoghurt med 2 msk lime och 1 tsk honung. Servera",
          },
        ],
      },
      // PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA
      // PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA
      // PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA, PASTA
      /*
      {
        id: 6,
        name: "Blomkålspasta med citron och ugnsbakad kapris",
        cookTime: 20,
        ingredients: ["Spaghetti", "1 vitlök"]
      },
      */
      {
        id: 400,
        name: "Pasta Pomodoro E Melanzane",
        cookTime: CookTime.THIRTY,
        typeOfRecipe: TypeOfRecipe.PASTA,
        servings: Servings.THREE,
        ingredients: [
          {
            ingredient: "Spaghetti",
            category: "basic",
          },
          {
            ingredient: "1 msk olivolja",
            category: "basic",
          },
          {
            ingredient: "1 liten rödlök",
            category: "basic",
          },
          {
            ingredient: "4 vitlöksklyftor",
            category: "basic",
          },
          {
            ingredient: "1/2 aubergine",
            category: "basic",
          },
          {
            ingredient: "2 msk tomatpuré",
            category: "basic",
          },
          {
            ingredient: "1 burk krossade tomater",
            category: "basic",
          },
          {
            ingredient: "2 msk japansk soja",
            category: "basic",
          },
          {
            ingredient: "2 tsk balsamico",
            category: "basic",
          },
          {
            ingredient: "En skvätt rödvin (optional)",
            category: "basic",
          },
          {
            ingredient: "ca. 25 st kalamataoliver",
            category: "basic",
          },
          {
            ingredient: "1 tetra kidneybönor (390 g)",
            category: "basic",
          },
          {
            ingredient: "1/2 tsk chiliflakes",
            category: "spice",
          },
          {
            ingredient: "1 tsk oregano",
            category: "spice",
          },
          {
            ingredient: "1 tsk timjan",
            category: "spice",
          },
          {
            ingredient: "nymald svartpeppar",
            category: "spice",
          },
          {
            ingredient: "smulad fetaost",
            category: "topping",
          },
        ],
        image: "assets/PASTA_umami.jpg",
        imageFlag: "assets/flags/italy.png",
        howTo: [
          {
            description:
              "Börja med att koka pasta. Medans, skär auberginen i tärningar samt hacka löken och vitlöken grovt.",
          },
          {
            description:
              "Häll olivoljan i en stekpanna och börja med att steka auberginen tills den fått lite färg. Tillsätt därefter all lök och stek ytterligare ett par minuter.",
          },
          {
            description:
              "När löken fått lite färg, tillsätt tomatpurén och rör om. Tillsätt sedan krossade tomater, oregano, timjan och låt koka i ett par minuter. ",
          },
          {
            description:
              "Tillsätt sedan soja, balsamvinäger, dadelsirap och rödvin. Klipp ner de soltorkade tomaterna i småt bitar.",
          },
          {
            description: "Skölj kidneybönorna och tillsätt dem också.",
          },
        ],
      },
      {
        id: 401,
        name: "Spaghetti Al Pesto",
        cookTime: CookTime.FIFTEEN,
        typeOfRecipe: TypeOfRecipe.PASTA,
        servings: Servings.TWO,
        ingredients: [
          {
            ingredient: "Spaghetti",
            category: "basic",
          },
          {
            ingredient: "Pesto (basilika)",
            category: "basic",
          },
          {
            ingredient: "2 msk pinjenötter",
            category: "basic",
          },
          {
            ingredient: "3-4 soltorkade tomater",
            category: "basic",
          },
          {
            ingredient: "4 cocktailtomater",
            category: "basic",
          },
          {
            ingredient: "salt",
            category: "spice",
          },
          {
            ingredient: "Nymald svartpeppar",
            category: "spice",
          },
          {
            ingredient: "Färsk basilika (alt. ruccola)",
            category: "topping",
          },
          {
            ingredient: "Surdegsbröd",
            category: "topping",
          },
        ],
        image: "assets/PASTA_pesto.jpg",
        imageFlag: "assets/flags/italy.png",
        howTo: [
          {
            description:
              "Koka spaghettin aldente. Med andra ord, ta av den innan den är helt färdig. Medan spaghettin kokar, dela cocktailtomaterna i havlor.",
          },
          {
            description:
              "När spaghettin kokat färdigt, rör ner pesto. Klipp ner de soltorkade tomaterna och tillsätt pinjenötter. Salta och peppra.",
          },
          {
            description:
              "Toppa rätten med färsk basilika eller ruccola. Rosta surdegsbrödet. Ät!",
          },
        ],
      },
      {
        id: 402,
        name: "Svamppasta med timjan & persilja",
        cookTime: CookTime.TWENTY,
        typeOfRecipe: TypeOfRecipe.PASTA,
        servings: Servings.TWO,
        ingredients: [
          {
            ingredient: "Valfri fullkornspasta",
            category: "basic",
          },
          {
            ingredient: "1 rödlök",
            category: "basic",
          },
          {
            ingredient: "2 vitlöksklyftor",
            category: "basic",
          },
          {
            ingredient: "300 g skogschampinjoner",
            category: "basic",
          },
          {
            ingredient: "1/2 msk japansk soja",
            category: "basic",
          },
          {
            ingredient: "200-250 ml havregrädde",
            category: "basic",
          },
          {
            ingredient: "Ruccola",
            category: "topping",
          },
          {
            ingredient: "Cocktailtomater",
            category: "topping",
          },
          {
            ingredient: "1 msk persilja (fryst)",
            category: "basic",
          },
          {
            ingredient: "1/2 kruka färsk timjan",
            category: "basic",
          },
          {
            ingredient: "Salt",
            category: "spice",
          },
          {
            ingredient: "Peppar",
            category: "spice",
          },
        ],
        image: "assets/PASTA_svamppasta.jpg",
        imageFlag: "assets/flags/italy.png",
        howTo: [
          {
            description:
              "Börja med att skölja och skära champinjonerna på hälften eller i fyror. Hacka sedan lök och vitlök.",
          },
          {
            description:
              "Stek champinjonerna i olivolja i några minuter. Tillätt flingsalt och rikligt med svartpeppar och stek sedan ett par minuter ytterligare. Sätt på pastan och koka.",
          },
          {
            description:
              "När champinjonerna fått färg och känns färdiga, ös ner dem i en skål. Stek sedan lök och vitlök i ett par minuter. Lägg sedan ner champinjonerna i stekpannan med löken och vitlöken.",
          },
          {
            description:
              "Tillsätt havregrädde, persilja, timjan och soja. Rör om och låt koka ett par minuter. Smaka av med salt och mer peppar om det behövs.",
          },
          {
            description:
              "Servera gärna rätten toppad med ruccola och cocktailtomater.",
          },
        ],
      },
      {
        id: 403,
        name: "Pasta Alfredo",
        cookTime: CookTime.THIRTY,
        typeOfRecipe: TypeOfRecipe.PASTA,
        servings: Servings.TWO,
        ingredients: [
          {
            ingredient: "Pasta, campanelle",
            category: "basic",
          },
          {
            ingredient: "1 gul lök",
            category: "basic",
          },
          {
            ingredient: "4 vitlöksklyftor",
            category: "basic",
          },
          {
            ingredient: "4 dl grönsaksbuljong",
            category: "basic",
          },
          {
            ingredient: "1.2 dl cashewnötter",
            category: "basic",
          },
          {
            ingredient: "1 msk citronjuice",
            category: "basic",
          },
          {
            ingredient: "3 msk b-jäst",
            category: "basic",
          },
          {
            ingredient: "Salt",
            category: "spice",
          },
          {
            ingredient: "Svartpeppar",
            category: "spice",
          },
          {
            ingredient: "2 msk vegansk parmesan",
            category: "topping",
          },
          {
            ingredient: "1 dl gröna ärtor",
            category: "topping",
          },
          {
            ingredient: "1 broccoli (optional)",
            category: "topping",
          },
        ],
        image: "assets/PASTA&PIZZA_alfredo.jpg",
        imageFlag: "assets/flags/italy.png",
        howTo: [
          {
            description:
              "Börja med att lägga cashewnötterna i blöt i minst en halvtimma innan tillagning. Koka upp 4 dl grönsaksbuljong",
          },
          {
            description:
              "Koka löken i 2 dl buljong i en stekpanna på medelhög värme i ca 8 minuter. Om det kokar för snabbt, tillsätt en aning till buljong",
          },
          {
            description:
              "Börja koka pasta och stek broccoli i olivolja, salt och peppar. Koka även upp ärtor.",
          },
          {
            description:
              "Efter 8 minuter, tillsätt vitlök och koka ett par minuter ytterligare under omrörning tills all buljong är borta",
          },
          {
            description:
              "Töm ner stekpannans innehåll i en mixer och tillsätt resten av buljongen, cashewnötter, citronjuice, b-jäst, salt och peppar",
          },
          {
            description:
              "Mixa ingredienserna tills de är krämiga. Toppa rätten med parmesan, ärtor och broccoli",
          },
        ],
      },
      {
        id: 404,
        name: "Spaghetti Alla Puttanesca",
        cookTime: CookTime.THIRTY,
        typeOfRecipe: TypeOfRecipe.PASTA,
        servings: Servings.TWO,
        ingredients: [
          {
            ingredient: "400 gram spaghetti",
            category: "basic",
          },
          {
            ingredient: "1-2 msk olivolja",
            category: "basic",
          },
          {
            ingredient: "4 vitlöksklyftor",
            category: "basic",
          },
          {
            ingredient: "1/2 msk chiliflakes",
            category: "basic",
          },
          {
            ingredient: "1 burk körsbärtstomater (400 gram)",
            category: "basic",
          },
          {
            ingredient: "350 gram urkärnade kalamataoliver",
            category: "basic",
          },
          {
            ingredient: "3 msk kapris",
            category: "basic",
          },
          {
            ingredient: "2-3 msk hackad persilja",
            category: "basic",
          },
          {
            ingredient: "Nymalen svartpeppar",
            category: "spice",
          },
        ],
        image: "assets/PASTA_puttanesca.jpg",
        imageFlag: "assets/flags/italy.png",
        howTo: [
          {
            description:
              "Börja med att hacka vitlöken. Stek den sedan i en kastrull i ca. 1 minut, tillsätt därefter chiliflakesen och stek i 1 minut till",
          },
          {
            description:
              "Häll ner körsbärstomaterna och kaprisen. Dela oliverna på hälften och tillsätt dem också. Låt grytan koka/puttra i 30 minuter",
          },
          {
            description:
              "Medan grytan puttrar, koka spaghettin aldente! När grytan kokat färdigt, häll ner den och blanda den med spaghettin, rör om.",
          },
          {
            description:
              "Servera! Toppa gärna med nymalen svartpeppar och hackad persilja.",
          },
        ],
      },
      {
        id: 405,
        name: "Penne All'Arrabbiata",
        cookTime: CookTime.TWENTY,
        typeOfRecipe: TypeOfRecipe.PASTA,
        servings: Servings.TWO,
        ingredients: [
          {
            ingredient: "250 gram pasta (penne)",
            category: "basic",
          },
          {
            ingredient: "Olivolja",
            category: "basic",
          },
          {
            ingredient: "2 vitlöksklyftor",
            category: "basic",
          },
          {
            ingredient: "1 tsk chiliflakes",
            category: "spice",
          },
          {
            ingredient: "2 msk tomatpuré",
            category: "basic",
          },
          {
            ingredient: "1 burk hela skalade tomater",
            category: "basic",
          },
          {
            ingredient: "2 msk arrabiatapesto",
            category: "basic",
          },
          {
            ingredient: "Svartpeppar",
            category: "spice",
          },
          {
            ingredient: "Salt",
            category: "spice",
          },
          {
            ingredient: "Färsk basilika",
            category: "topping",
          },
        ],
        image: "assets/PASTA_arrabiata.jpg",
        imageFlag: "assets/flags/italy.png",
        howTo: [
          {
            description:
              "Börja med att koka pasta. Medans, skär auberginen i tärningar samt hacka löken och vitlöken grovt.",
          },
        ],
      },
      // SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD
      // SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD
      // SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD
      {
        id: 500,
        name: "Lime- & Chilinudelsallad",
        cookTime: CookTime.TWENTY,
        typeOfRecipe: TypeOfRecipe.SALAD,
        servings: Servings.TWO,
        ingredients: [
          {
            ingredient: "150-200 gram vermicelli glasnudlar",
            category: "basic",
          },
          {
            ingredient: "1/2 gurka",
            category: "basic",
          },
          {
            ingredient: "1/2 pkt böngroddar",
            category: "basic",
          },
          {
            ingredient: "40 gram spenat",
            category: "basic",
          },
          {
            ingredient: "2 msk sesamfrön",
            category: "basic",
          },
          {
            ingredient: "1 näve hackade jordnötter",
            category: "basic",
          },
          {
            ingredient: "1/2 kruka koriander",
            category: "basic",
          },
          {
            ingredient: "2 msk olivolja",
            category: "topping",
          },
          {
            ingredient: "2 msk ljus soja",
            category: "topping",
          },
          {
            ingredient: "2 msk lime",
            category: "topping",
          },
          {
            ingredient: "1 tsk risvinäger",
            category: "topping",
          },
          {
            ingredient: "1 tsk dadelsirap (alt. socker)",
            category: "topping",
          },
          {
            ingredient: "1 stor vitlöksklyfta",
            category: "topping",
          },
          {
            ingredient: "1 tsk ingefära",
            category: "topping",
          },
          {
            ingredient: "1/2 tsk chiliflakes",
            category: "topping",
          },
        ],
        image: "assets/SALAD_limegingerchilinoodles.jpg",
        howTo: [
          {
            description:
              "Blanda olivolja, soja, lime, risvinäger, dadelsirap, riven vitlök och -ingefära samt chili flakes i en liten skål. Ställ sedan in dressingen i kylen.",
          },
          {
            description:
              "Koka nudlarna enligt förpackning. Skiva sedan gurkan och hacka jordnötterna.",
          },
          {
            description:
              "När nudlarna är färdiga, lägg ner dem först i en djuptallrik. Häll på lite av dressingen. Lägg sedan till övrig topping. Toppa toppigen med ytterligare lite dressing.",
          },
        ],
      },
      {
        id: 501,
        name: "Nước chấm nudelsallad",
        cookTime: CookTime.THIRTY,
        typeOfRecipe: TypeOfRecipe.SALAD,
        servings: Servings.TWO,
        ingredients: [
          {
            ingredient: "150-200 gram vermicelli glasnudlar",
            category: "basic",
          },
          {
            ingredient: "1,5 msk rapsolja",
            category: "topping",
          },
          {
            ingredient: "2 msk japansk soja",
            category: "topping",
          },
          {
            ingredient: "2 msk risvinäger",
            category: "topping",
          },
          {
            ingredient: "1 msk dadelsirap",
            category: "topping",
          },
          {
            ingredient: "1 stor vitlöksklyfta",
            category: "topping",
          },
          {
            ingredient: "1/2 tsk hackad chili (frusen)",
            category: "topping",
          },
          {
            ingredient: "Sesamolja",
            category: "basic",
          },
          {
            ingredient: "250 gram tofu",
            category: "basic",
          },
          {
            ingredient: "2 morötter",
            category: "basic",
          },
          {
            ingredient: "1/2 gurka",
            category: "basic",
          },
          {
            ingredient: "3-4 blad romansallad",
            category: "basic",
          },
          {
            ingredient: "80-90 gram böngroddar",
            category: "basic",
          },
          {
            ingredient: "1 kruka mynta",
            category: "basic",
          },
        ],
        image: "assets/SALAD_vermicellinoodlesalad.jpg",
        imageFlag: "assets/flags/vietnam.png",
        howTo: [
          {
            description:
              "Börja med att vispa ihop rapsolja, soja, risvinäger, dadelsirap, en riven vitlök och chili. Ställ in i kylen.",
          },
          {
            description:
              "Tärna sedan tofun och stek i lite soja och sesamolja. Medans tofun steker, börja koka nudlarna samt julienna morötterna, romansalladen tunnt och skiva gurkan.",
          },
          {
            description:
              "Servera allt i en skål och ringla över några matskedar av dressingen.",
          },
        ],
      },
      {
        id: 502,
        name: "Potatis- & rödbetssallad",
        cookTime: CookTime.THIRTY,
        typeOfRecipe: TypeOfRecipe.SALAD,
        servings: Servings.THREE,
        ingredients: [
          {
            ingredient: "8-9 potatisar",
            category: "basic",
          },
          {
            ingredient: "2 msk olivolja",
            category: "basic",
          },
          {
            ingredient: "500 gram rödbetor (färdigkokta)",
            category: "basic",
          },
          {
            ingredient: "nymald svartpeppar",
            category: "spice",
          },
          {
            ingredient: "salt",
            category: "spice",
          },
          {
            ingredient: "50 gram ruccola",
            category: "basic",
          },
          {
            ingredient: "150 gram veg. fetaost",
            category: "basic",
          },
          {
            ingredient: "6 st soltorkade tomater",
            category: "basic",
          },
          {
            ingredient: "4 st rädisor",
            category: "basic",
          },
          {
            ingredient: "1/2 rödlök",
            category: "basic",
          },
          {
            ingredient: "1 dl valnötter",
            category: "basic",
          },
          {
            ingredient: "Balsamvinäger",
            category: "topping",
          },
        ],
        image: "assets/SALAD_potatisrodbetssallad.jpg",
        howTo: [
          {
            description:
              "Börja med att koka potatisen. Medan de kokar, skär rödbetorna i klyftor och stek dem sedan i olivolja på ganska hög värme. Salta och peppra dem.",
          },
          {
            description:
              "När betorna är färdigsteka, häll ner dem i en större skål. Då potatisen kokat klart, skär även dem i klyftor och tillsätt till skålen.",
          },
          {
            description:
              "Tillsätt ruccola, smula ner fetaosten samt klipp ner de soltorkade tomaterna.",
          },
          {
            description:
              "Skär rödlöken i tunna skivor, skiva även rädisorna och hacka valnötterna. Tillsätt allt till skålen. Bland om!",
          },
          {
            description:
              "Servera salladen med att toppa den med balsamvinäger!",
          },
        ],
      },
      {
        id: 503,
        name: "Pastapestosallad",
        cookTime: CookTime.TWENTY,
        typeOfRecipe: TypeOfRecipe.SALAD,
        servings: Servings.THREE,
        ingredients: [
          {
            ingredient: "300 gram trottole (pasta)",
            category: "basic",
          },
          {
            ingredient: "5 dryga tsk basilikapesto",
            category: "basic",
          },
          {
            ingredient: "30-40 gram ruccola",
            category: "basic",
          },
          {
            ingredient: "8 st mozzarellabollar (veg)",
            category: "basic",
          },
          {
            ingredient: "7 st halkidikioliver",
            category: "basic",
          },
          {
            ingredient: "1/2 rödlök",
            category: "basic",
          },
          {
            ingredient: "8 st cocktailtomater",
            category: "basic",
          },
          {
            ingredient: "1 msk pinjenötter (optional)",
            category: "basic",
          },
          {
            ingredient: "svartpeppar",
            category: "spice",
          },
          {
            ingredient: "salt",
            category: "spice",
          },
        ],
        image: "assets/SALAD_pastapesto.jpg",
        howTo: [
          {
            description:
              "Blanda olivolja, soja, lime, risvinäger, dadelsirap, riven vitlök och -ingefära samt chili flakes i en liten skål. Ställ sedan in dressingen i kylen.",
          },
          {
            description:
              "Koka nudlarna enligt förpackning. Skiva sedan gurkan och hacka jordnötterna.",
          },
          {
            description:
              "När nudlarna är färdiga, lägg ner dem först i en djuptallrik. Häll på lite av dressingen. Lägg sedan till övrig topping. Toppa toppigen med ytterligare lite dressing.",
          },
        ],
      },
      // FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST
      // FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST
      // FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST
      {
        id: 600,
        name: "Overnight Oats med äpple & blåbär",
        cookTime: CookTime.TEN,
        typeOfRecipe: TypeOfRecipe.BREAKFAST,
        servings: Servings.ONE,
        ingredients: [
          {
            ingredient: "0.8 dl havregryn",
            category: "basic",
          },
          {
            ingredient: "1 dl mandelmjölk",
            category: "basic",
          },
          {
            ingredient: "1 msk chiafrön",
            category: "basic",
          },
          {
            ingredient: "1 krm kanel",
            category: "spice",
          },
          {
            ingredient: "2 krm gurkmeja",
            category: "spice",
          },
          {
            ingredient: "1 krm kardemumma",
            category: "spice",
          },
          {
            ingredient: "1 tsk nötsmör",
            category: "topping",
          },
          {
            ingredient: "1 tsk tahini",
            category: "topping",
          },
          {
            ingredient: "1/2 äpple",
            category: "topping",
          },
          {
            ingredient: "0.5 dl blåbär",
            category: "topping",
          },
          {
            ingredient: "0.5 dl valfri granola",
            category: "topping",
          },
          {
            ingredient: "Mörk choklad",
            category: "topping",
          },
        ],
        image: "assets/BREAKFAST_overnightoats.jpg",
        imageFlag: "assets/flags/switzerland.png",
        howTo: [
          {
            description:
              "Blanda havregryn, chiafrön, kryddor och mandelmjölk i en skål eller djuptallrik. Ställ in i kylen över natten.",
          },
          {
            description:
              "Ta ut tallriken ur kylen. Hacka upp äpplet, tina blåbär i mikron eller i varmt vatten. Lägg på all annan topping.",
          },
        ],
      },
      {
        id: 601,
        name: "Banana & Blueberry Smoothie",
        cookTime: CookTime.TEN,
        typeOfRecipe: TypeOfRecipe.BREAKFAST,
        servings: Servings.ONE,
        ingredients: [
          {
            ingredient: "1 dl havregryn",
            category: "basic",
          },
          {
            ingredient: "2.5 dl mandelmjölk",
            category: "basic",
          },
          {
            ingredient: "1 banan",
            category: "basic",
          },
          {
            ingredient: "0.5 dl blåbär",
            category: "basic",
          },
          {
            ingredient: "1 stor tsk jordnötssmör",
            category: "basic",
          },
          {
            ingredient: "2 krm kanel",
            category: "spice",
          },
          {
            ingredient: "1 tsk gurkmeja",
            category: "spice",
          },
        ],
        image: "assets/BREAKFAST_banansmoothie.jpg",
        imageFlag: "assets/flags/usa.png",
        howTo: [
          {
            description:
              "Mixa allt i blender men börja med att mixa havregrynen!",
          },
        ],
      },
      {
        id: 602,
        name: "Gröt med äpple och kanel",
        cookTime: CookTime.FIFTEEN,
        typeOfRecipe: TypeOfRecipe.BREAKFAST,
        servings: Servings.TWO,
        ingredients: [
          {
            ingredient: "2 dl havregryn",
            category: "basic",
          },
          {
            ingredient: "4 dl vatten",
            category: "basic",
          },
          {
            ingredient: "3 dl havremjölk",
            category: "basic",
          },
          {
            ingredient: "1 krm kanel",
            category: "spice",
          },
          {
            ingredient: "2 krm kardemumma",
            category: "spice",
          },
          {
            ingredient: "2 krm gurkmeja",
            category: "spice",
          },
          {
            ingredient: "1 krm ingefära (krydda)",
            category: "spice",
          },
          {
            ingredient: "1 nypa vanlijpulver (optional)",
            category: "spice",
          },
          {
            ingredient: "1 stort äpple",
            category: "topping",
          },
          {
            ingredient: "2-4 msk jordnötssmör",
            category: "topping",
          },
          {
            ingredient: "1-2 msk valnötter/mandlar",
            category: "topping",
          },
          {
            ingredient: "1 msk kokos",
            category: "topping",
          },
        ],
        image: "assets/BREAKFAST_grot.jpg",
        howTo: [
          {
            description:
              "Blanda havregryn, vatten och alla kryddor i en kastrull. Koka sedan gröten på medelvärme tills den är ganska fast. Medans gröten kokar kan du koka upp havremjölken och vispa den.",
          },
          {
            description:
              "Häll upp gröten i två skålar när den är klar. Toppa med jordnötssmör, hackade äpplen och -nötter, kokos, och varm vispad havremjölk. För en ännu lyxigare version, stek äpplena i smör med lite kanel och flingsalt.",
          },
        ],
      },
      {
        id: 603,
        name: "Scrambled Tofu w/ Oriental Seasoning",
        cookTime: CookTime.TWENTY,
        typeOfRecipe: TypeOfRecipe.BREAKFAST,
        servings: Servings.TWO,
        ingredients: [
          {
            ingredient: "250 gram tofu",
            category: "basic",
          },
          {
            ingredient: "2 skivor surdegsbröd",
            category: "basic",
          },
          {
            ingredient: "smör",
            category: "basic",
          },
          {
            ingredient: "basilikapesto",
            category: "basic",
          },
          {
            ingredient: "sriracha",
            category: "topping",
          },
          {
            ingredient: "machésallad",
            category: "topping",
          },
          {
            ingredient: "4-5 st cocktailtomater",
            category: "topping",
          },
          {
            ingredient: "2 tsk sju kryddor",
            category: "spice",
          },
          {
            ingredient: "1 tsk garam masala",
            category: "spice",
          },
          {
            ingredient: "1/2 tsk kryddpeppar",
            category: "spice",
          },
          {
            ingredient: "1/2 tsk koriander",
            category: "spice",
          },
          {
            ingredient: "1/2 tsk gurkmeja",
            category: "spice",
          },
          {
            ingredient: "1 nypa paprika",
            category: "spice",
          },
          {
            ingredient: "salt",
            category: "spice",
          },
        ],
        image: "assets/BREAKFAST_scrambledtofu.jpg",
        howTo: [
          {
            description:
              "Mixa allt i blender men börja med att mixa havregrynen!",
          },
        ],
      },
      {
        id: 604,
        name: "Havregurt med frukt",
        cookTime: CookTime.TEN,
        typeOfRecipe: TypeOfRecipe.BREAKFAST,
        servings: Servings.ONE,
        ingredients: [
          {
            ingredient: "1/2 äpple",
            category: "basic",
          },
          {
            ingredient: "1/2 apelsin",
            category: "basic",
          },
          {
            ingredient: "Ca. 1 dl havregurt",
            category: "basic",
          },
          {
            ingredient: "pumpakärnor",
            category: "basic",
          },
          {
            ingredient: "granola",
            category: "basic",
          },
          {
            ingredient: "kanel (optional)",
            category: "spice",
          },
        ],
        image: "assets/BREAKFAST_overnightoats.jpg",
        howTo: [
          {
            description:
              "Hacka upp ett halvt äpple och en halv apelsin till bitar. Lägg ner i en skål. Lägg på resterande ingredienser.",
          },
        ],
      },
      // SNACKS & DRYCK, SNACKS & DRYCK, SNACKS & DRYCK, SNACKS & DRYCK, SNACKS & DRYCK, SNACKS & DRYCK, SNACKS & DRYCK, SNACKS & DRYCK
      // SNACKS & DRYCK, SNACKS & DRYCK, SNACKS & DRYCK, SNACKS & DRYCK, SNACKS & DRYCK, SNACKS & DRYCK, SNACKS & DRYCK, SNACKS & DRYCK
      // SNACKS & DRYCK, SNACKS & DRYCK, SNACKS & DRYCK, SNACKS & DRYCK, SNACKS & DRYCK, SNACKS & DRYCK, SNACKS & DRYCK, SNACKS & DRYCK
      {
        id: 700,
        name: "Sangria",
        cookTime: CookTime.TEN,
        typeOfRecipe: TypeOfRecipe.SNACKS_AND_DRINKS,
        servings: Servings.FOUR,
        ingredients: [
          {
            ingredient: "1 apelsin",
            category: "basic",
          },
          {
            ingredient: "1 äpple (Royal Gala)",
            category: "basic",
          },
          {
            ingredient: "750 ml vin (tempranillo eller garnacha)",
            category: "basic",
          },
          {
            ingredient: "1 dl brandy (Eau-de-vie)",
            category: "basic",
          },
          {
            ingredient: "3-4 kanelstänger",
            category: "spice",
          },
        ],
        image: "assets/SNACKS&DRINKS_sangria.jpg",
        imageFlag: "assets/flags/spain.png",
        howTo: [
          {
            description:
              "Börja med att skala och hacka apelsinen i bitar. Hacka även upp äpplet i mindre bitar. Lägg allt i en kanna.",
          },
          {
            description:
              "Tillsätt vin, brandy och kanelstänger. Kyl ner i ett par timmar.",
          },
        ],
      },
      {
        id: 701,
        name: "Tzatziki",
        cookTime: CookTime.TEN,
        typeOfRecipe: TypeOfRecipe.SNACKS_AND_DRINKS,
        servings: Servings.FOUR,
        ingredients: [
          {
            ingredient: "2 dl grekisk havregurt",
            category: "basic",
          },
          {
            ingredient: "1 stor vitlök",
            category: "basic",
          },
          {
            ingredient: "1/2 gurka",
            category: "basic",
          },
          {
            ingredient: "1-2 tsk olivolja",
            category: "basic",
          },
          {
            ingredient: "1 tsk balsamvinäger",
            category: "basic",
          },
          {
            ingredient: "salt",
            category: "spice",
          },
          {
            ingredient: "Nymalen svartpeppar",
            category: "spice",
          },
        ],
        image: "assets/SNACKS&DRINKS_tzatziki.jpg",
        imageFlag: "assets/flags/greece.png",
        howTo: [
          {
            description:
              "Lägg ner havregurten i en skål eller djup tallrik. Riv sedan ner vitlöken i den",
          },
          {
            description:
              "Dela gurkan på hälften och gröp ur mitten (den vattniga delen) med en sked. Riv sedan gurkan med ett rivjärn",
          },
          {
            description:
              "Lägg ner den rivna gurkan i ett durkslag och pressa ur vätska från den med en sked. Töm sedan ner den i yoghurten",
          },
          {
            description:
              "Tillsätt olivolja, balsamvinäger, salt, nymalen svartpeppar och rör om. Smaka av om mer salt behövs",
          },
        ],
      },
      {
        id: 702,
        name: "Negroni",
        cookTime: CookTime.TEN,
        typeOfRecipe: TypeOfRecipe.SNACKS_AND_DRINKS,
        servings: Servings.ONE,
        ingredients: [
          {
            ingredient: "4 cl gin",
            category: "basic",
          },
          {
            ingredient: "2 cl martini rosso",
            category: "basic",
          },
          {
            ingredient: "2 cl campari bitter",
            category: "basic",
          },
          {
            ingredient: "1 apelsinskiva / apelsinskal",
            category: "topping",
          },
        ],
        image: "assets/SNACKS&DRINKS_negroni.jpg",
        imageFlag: "assets/flags/italy.png",
        howTo: [
          {
            description:
              "Lägg ner en stor bit is (alternativt flera små) i ett glas. Häll ner all sprit och blanda om.",
          },
          {
            description: "Skär upp en apelsinskiva och lägg ner.",
          },
        ],
      },
    ];

    /*
      { id: 2, name: "Scrambled Tofu on Dark Bread", cookTime: 15 },
      { id: 2, name: "Havregurt & Granola w/ fruit", cookTime: 5 } */

    return {
      allRecipes,
    };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  /* genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  } */
}
