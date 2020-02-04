import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  // MAKE CONSTS OUT OF INGRIDIENTS ETC. FOR EXAMPLE PASTA AND GROUNDPEPPER.
  // const COOKTIME_45: '45 min';
  // WALNUTS FOR OMEGA-3
  // STREET FOOD: VARMKORV, GYROS, TACOS, BAHNI MI, CHAMPINJONTOAST MED AVOKADO, BLACK BEAN BURGER
  // GRYTOR OCH SOPPOR: DAAL, RAJMA, KHOI SUEY
  // BOWLS: EDAMAMETOFU, TACO BOWL, ARRABIATA BOWL
  // PASTA & PIZZA: PASTA BASILIKAPESTO, BLOMKÅLSPASTA, OSTIG PASTA, SKOGSCHAMPINJONSPASTA MED TIMJAN, CARBOANARA, BOLOGNESE
  // SALLAD: VEGANSK HALLOUMISALLAD
  // BREAKFAST: OVERNIGHT OATS, OATMEAL MED NÖTSMÖR, SCRAMBLED TOFU
  // TOTALT: 22 RECEPT
  createDb() {
    const allRecipes = [
      // STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD
      // STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD
      // STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD, STREET FOOD
      {
        id: 1,
        name: "Vegansk varmkorv",
        cookTime: 10,
        typeOfRecipe: "street-food",
        servings: "2",
        ingredients: [
          {
            ingredient: "4 varmkorvsbröd, fullkorn",
            category: "basic"
          },
          {
            ingredient: "4 sojakorvar",
            category: "basic"
          },
          {
            ingredient: "4 teskedar dijonsenap",
            category: "topping"
          },
          {
            ingredient: "1 näve ruccola",
            category: "topping"
          },
          {
            ingredient: "kimchi",
            category: "topping"
          },
          {
            ingredient: "Nymald svartpeppar",
            category: "topping"
          },
          {
            ingredient: "srirachamajonnäs",
            category: "topping"
          }
        ],
        image: "assets/blomkale.jpg",
        howTo: [
          "1. Stek korvjävlarna",
          "2. Medan korven steker, dela upp moroten och skär den i tunna stavar",
          "3. Skär några tunna skivor av cocktailtomaterna",
          "4. Smörj brödets insida med 1 tsk dijonsenap",
          "5. Lägg lite ruccola i brödet",
          "6. Lägg på tomater",
          "7. Lägg på korvfan",
          "8. Peppra och dunka på srirachamajo"
        ]
      },
      /* {
        id: 3,
        name: "Grekisk gyros",
        cookTime: 30,
        typeOfRecipe: "street-food",
        servings: "2",
        ingredients: [
          {
            ingredient: "Fullkornswrapbröd",
            category: "basic"
          },
          {
            ingredient: "Vegansk halloumiost",
            category: "basic"
          },
          {
            ingredient: "Ruccola",
            category: "basic"
          },
          {
            ingredient: "Sallad (från salladshuvud)",
            category: "basic"
          },
          {
            ingredient: "8 cocktailtomater",
            category: "basic"
          },
          {
            ingredient: "1 rödlök",
            category: "basic"
          },
          {
            ingredient: "gurka",
            category: "basic"
          },
          {
            ingredient: "tzatsiki",
            category: "basic"
          }
        ],
        image: "assets/blomkale.jpg",
        howTo: ["1. Stek matten"]
      }, */
      /* ,
      {
        id: 3,
        name: "Kantarelltoast med bladspenat",
        cookTime: 10,
        typeOfRecipe: "misc",
        ingredients: [
          "Kantareller",
          "Surdergsbröd",
          "veganskt smör",
          "bladspenat",
          "peppar",
          "salt"
        ],
        image: "assets/risotto.jpg",
        howTo: []
      },
      {
        id: 4,
        name: "Smörstekt champinjontoast med avokado",
        cookTime: 10,
        typeOfRecipe: "misc",
        ingredients: ["12-14 st Champinjoner"],
        image: "assets/risotto.jpg",
        howTo: []
      },
      {
        id: 3,
        name: "Black Bean Burger",
        cookTime: 45,
        typeOfRecipe: "misc",
        ingredients: [
        ],
        image: "assets/tacos.jpg"
      },
      {
        id: 5,
        name: "Bahn Mí",
        cookTime: 45,
        typeOfRecipe: "misc",
        ingredients: [
        ],
        image: "assets/food.jpg"
      }, */
      /*
      {
        id: 6,
        name: "Blomkålspasta med citron och ugnsbakad kapris",
        cookTime: 20,
        ingredients: ["Spaghetti", "1 vitlök"]
      },
      */

      // GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA
      // GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA
      // GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA, GRYTOR & SOPPA
      {
        id: 100,
        name: "Indisk daal med ris",
        cookTime: 45,
        typeOfRecipe: "stews-and-soups",
        servings: "4",
        ingredients: [
          {
            ingredient: "4 portioner ris",
            category: "basic"
          },
          {
            ingredient: "1 msk olivolja",
            category: "basic"
          },
          {
            ingredient: "1 stor röd lök",
            category: "basic"
          },
          {
            ingredient: "2 vitlöksklyftor",
            category: "basic"
          },
          {
            ingredient: "2 medium morötter",
            category: "basic"
          },
          {
            ingredient: "4 dl röda linser",
            category: "basic"
          },
          {
            ingredient: "400 gram krossade tomater",
            category: "basic"
          },
          {
            ingredient: "400 ml kokosmjölk",
            category: "basic"
          },
          {
            ingredient: "1 grönsaksbuljongstärning",
            category: "basic"
          },
          {
            ingredient: "2-3 dl vatten",
            category: "basic"
          },
          {
            ingredient: "40-50 gram babyspenat",
            category: "basic"
          },
          {
            ingredient: "2 tsk koriander",
            category: "spice"
          },
          {
            ingredient: "1-2 msk ingefära",
            category: "spice"
          },
          {
            ingredient: "1 tsk spiskummin",
            category: "spice"
          },
          {
            ingredient: "1 krm kanel",
            category: "spice"
          },
          {
            ingredient: "Salt",
            category: "spice"
          },
          {
            ingredient: "1 lime",
            category: "topping"
          },
          {
            ingredient: "1 näve hackade cashewnötter",
            category: "topping"
          },
          {
            ingredient: "Sambal oelek",
            category: "topping"
          }
        ],
        image: "assets/blomkale.jpg",
        howTo: [
          {
            description:
              "Hacka löken, vitlöken och tärna morötterna. Stek i olivolja i några minuter."
          },
          {
            description: "Tillsätt alla kryddor förutom salt och rör om."
          },
          {
            description:
              "Rör ner krossade tomater, kokosmjölk, vatten och grönsaksbuljong. Rör om och tillsätt linserna."
          },
          {
            description:
              "Koka på låg värme under lock i cirka 15 minuter. Tillsätt därefter babyspenaten. Rör om."
          },
          {
            description:
              "Låt det koka i cirka 5 minuter till. Salta och krydda mer om det behövs. Smaka av."
          },
          {
            description:
              "Servera med ris, lime, hackade cashewnötter och sambal oelek."
          }
        ]
      },
      {
        id: 101,
        name: "Rajma med ris",
        cookTime: 30,
        typeOfRecipe: "stews-and-soups",
        servings: "6",
        ingredients: [
          {
            ingredient: "6 portioner ris",
            category: "basic"
          },
          {
            ingredient: "1 msk olivolja",
            category: "basic"
          },
          {
            ingredient: "2 stora rödlök",
            category: "basic"
          },
          {
            ingredient: "7-8 vitlöksklyftor",
            category: "basic"
          },
          {
            ingredient: "3 msk hackad ingefära",
            category: "basic"
          },
          {
            ingredient: "2-3 msk grön chilipasta",
            category: "basic"
          },
          {
            ingredient: "6 mediumstora tomater",
            category: "basic"
          },
          {
            ingredient: "6 msk havregrädde",
            category: "basic"
          },
          {
            ingredient: "7-8 dl vatten",
            category: "basic"
          },
          {
            ingredient: "750 - 800 gram kidneybönor",
            category: "basic"
          },
          {
            ingredient: "65 gram bladspenat",
            category: "basic"
          },
          {
            ingredient: "3 tsk koriander",
            category: "spice"
          },
          {
            ingredient: "7-8 tsk chiliflakes",
            category: "spice"
          },
          {
            ingredient: "1 tsk gurkmeja",
            category: "spice"
          },
          {
            ingredient: "1 tsk garam masala",
            category: "spice"
          },
          {
            ingredient: "1 tsk kummin",
            category: "spice"
          },
          {
            ingredient: "2 tsk bockhornsklöver",
            category: "spice"
          },
          {
            ingredient: "1 nypa hing (skippa för glutenfri)",
            category: "spice"
          },
          {
            ingredient: "Salt",
            category: "spice"
          },
          {
            ingredient: "1 kruka färsk koriander",
            category: "topping"
          }
        ],
        image: "assets/blomkale.jpg",
        howTo: [
          {
            description:
              "Koka riset. Hacka lök, vitlök, ingefära och tomaterna i bitar."
          },
          {
            description:
              "Stek lök och vitlök i några minuter. Lägg till ingefäran och stek ytterligare i någon minut."
          },
          {
            description:
              "Tillsätt chilipastan och stek i 20 sekunder. Vänd ner tomaterna och stek på hög värme i 2 minuter."
          },
          {
            description:
              "Lägg till alla kryddor förutom salt. Stek i någon minut."
          },
          {
            description:
              "Vänd ner kidneybönorna och tillsätt vatten. Salta en aning."
          },
          {
            description:
              "Låt koka lätt under lock i ca 10 minuter. Tryck sedan sönder några av kidneybönorna och vänd ner spenaten."
          },
          {
            description:
              "Rör om och tillsätt havregrädden. Rör om igen tills grytan tjocknat lite. Koka i ytterligare 1 minut."
          },
          {
            description: "Servera med ris och färsk koriander."
          }
        ]
      },
      {
        id: 102,
        name: "Khao soi (burmersisk nudelsoppa)",
        cookTime: 30,
        typeOfRecipe: "stews-and-soups",
        servings: "3",
        ingredients: [
          {
            ingredient: "1 röd lök",
            category: "basic"
          },
          {
            ingredient: "4 vitlöksklyftor",
            category: "basic"
          },
          {
            ingredient: "1-2 msk hackad ingefära",
            category: "basic"
          },
          {
            ingredient: "2 msk röd currypasta",
            category: "basic"
          },
          {
            ingredient: "2 tsk curry",
            category: "krydda"
          },
          {
            ingredient: "1 tsk gurkmeja",
            category: "krydda"
          },
          {
            ingredient: "1 liter grönsaksbuljong",
            category: "basic"
          },
          {
            ingredient: "2,5 dl kokosmjölk",
            category: "basic"
          },
          {
            ingredient: "2-3 msk sojasås (kikkoman)",
            category: "basic"
          },
          {
            ingredient: "2 msk dadelsocker (alt. socker)",
            category: "krydda"
          },
          {
            ingredient: "1/2 limejuice",
            category: "basic"
          },
          {
            ingredient: "180 g risnudlar",
            category: "basic"
          },
          {
            ingredient: "1/2 limejuice",
            category: "topping"
          },
          {
            ingredient: "1 kruka koriander",
            category: "topping"
          },
          {
            ingredient: "1 näve hackade cashewnötter",
            category: "topping"
          }
          /*  {
            ingredient: "tofu (optional)",
            category: "basic"
          } */
        ],
        image: "assets/blomkale.jpg",
        howTo: [
          {
            description: "Koka upp 1 liter grönsaksbuljong."
          },
          {
            description:
              "Hacka lök, vitlök och ingefära. Stek lök och vitlök. Tillsätt därefter ingefäran och stek i någon minut till."
          },
          {
            description:
              "Tillsätt currypasta, currykrydda, gurkmeja och kokosmjölk. Tillsätt också grönsaksbuljongen."
          },
          {
            description:
              "Koka upp och låt koka i 5 minuter. Lägg sedan till soja, limejuice och dadelsocker. Dra ner värmen och låt koka i 3 minuter till."
          },
          {
            description:
              "Lägg ner nudlarna i soppan och koka i 2 minuter till. Servera med koriander, lime och hackade cashewnötter."
          }
        ]
      },
      /* {
        id: 103,
        name: "Currygryta på kikärtor och potatis",
        cookTime: 45,
        typeOfRecipe: "potsAndStews",
        servings: "4",
        ingredients: [
          {
            ingredient: "5 stora potatisar",
            category: "basic"
          },
          {
            ingredient: "1 burk kokosmjölk",
            category: "basic"
          },
          {
            ingredient: "1 burk kikärtor",
            category: "basic"
          },
          {
            ingredient: "200 g fryst (gärna hel) spenat",
            category: "basic"
          },
          {
            ingredient: "1 rödlök",
            category: "basic"
          },
          {
            ingredient: "1-2 msk curry",
            category: "krydda"
          },
          {
            ingredient: "2 tsk paprikapulver",
            category: "krydda"
          },
          {
            ingredient: "2 msk grönsaksfond",
            category: "krydda"
          },
          {
            ingredient: "salt/soja",
            category: "krydda"
          },
          {
            ingredient: "Svartpeppar",
            category: "krydda"
          },
          {
            ingredient: "1 kruka färsk persilja",
            category: "topping"
          }
        ],
        image: "assets/blomkale.jpg",
        howTo: ["1. Laga maten"]
      } */
      // BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS
      // BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS
      // BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS, BOWLS
      {
        id: 200,
        name: "Japansk edamame- & tofu-bowl",
        cookTime: 30,
        typeOfRecipe: "bowl",
        servings: "3",
        ingredients: [
          {
            ingredient: "Ris",
            category: "basic"
          },
          {
            ingredient: "Machésallat",
            category: "basic"
          },
          {
            ingredient: "Edamamebönor",
            category: "basic"
          },
          {
            ingredient: "Morötter",
            category: "basic"
          },
          {
            ingredient: "Gurka",
            category: "basic"
          },
          {
            ingredient: "Avokado",
            category: "basic"
          },
          {
            ingredient: "Mango",
            category: "basic"
          },
          {
            ingredient: "Tofu",
            category: "basic"
          },
          {
            ingredient: "Peppar",
            category: "spice"
          },
          {
            ingredient: "Sesamfrön",
            category: "topping"
          },
          {
            ingredient: "Färsk Koriander",
            category: "topping"
          },
          {
            ingredient: "Shoyu-soja",
            category: "topping"
          },
          {
            ingredient: "Srirachamajonnäs",
            category: "topping"
          }
        ],
        image: "assets/food.jpg",
        howTo: [
          {
            description: "Börja med att skölja och koka riset."
          },
          {
            description:
              "Medan det kokar, hacka morötter och gurka. Skiva sedan avokadon."
          },
          {
            description:
              "Hacka tofun och stek. Häll ner lite soja på tofun medans den steker."
          },
          {
            description:
              "Servera sedan allt i en skål. Toppa med koriander, shoyu, srirachamajonnäs och sesamfrön. Man kan också peppra avokadon en aning."
          }
        ]
      },
      {
        id: 201,
        name: "Mexikansk taco bowl",
        cookTime: 45,
        typeOfRecipe: "bowl",
        ingredients: [
          {
            ingredient: "Ris / Råris / Brunt ris",
            category: "basic"
          },
          {
            ingredient: "Svarta bönor",
            category: "basic"
          },
          {
            ingredient: "Majs",
            category: "basic"
          },
          {
            ingredient: "Cocktailtomater",
            category: "basic"
          },
          {
            ingredient: "Rödlök eller salladslök",
            category: "basic"
          },
          {
            ingredient: "Avokado",
            category: "basic"
          },
          {
            ingredient: "Sötpotatis (optional)",
            category: "basic"
          },
          {
            ingredient: "Grönkål",
            category: "basic"
          },
          {
            ingredient: "Salt",
            category: "spice"
          },
          {
            ingredient: "Peppar",
            category: "spice"
          },
          {
            ingredient: "Lime",
            category: "topping"
          },
          {
            ingredient: "Sriracha",
            category: "topping"
          },
          {
            ingredient: "Soygurt",
            category: "topping"
          },
          {
            ingredient: "Färsk koriander",
            category: "topping"
          }
        ],
        image: "assets/food.jpg"
      },
      {
        id: 202,
        name: "Italiensk arrabiata bowl",
        typeOfRecipe: "bowl",
        cookTime: 20,
        servings: 4,
        ingredients: [
          {
            ingredient: "Gnocchi eller penne, bönpasta",
            category: "basic"
          },
          {
            ingredient: "2 vitlöksklyftor",
            category: "basic"
          },
          {
            ingredient: "Bladspenat",
            category: "basic"
          },
          {
            ingredient: "Soltorkade tomater",
            category: "basic"
          },
          {
            ingredient: "Peppar",
            category: "spice"
          },
          {
            ingredient: "Chiliflakes",
            category: "spice"
          },
          {
            ingredient: "Valnötter",
            category: "topping"
          },
          {
            ingredient: "Blomkål",
            category: "topping"
          },
          {
            ingredient: "Färsk basilika",
            category: "topping"
          },
          {
            ingredient: "Pesto arrabiata",
            category: "topping"
          }
        ],
        image: "assets/food.jpg",
        howTo: [
          {
            description: "Börja med att skölja och koka riset."
          }
        ]
      },
      // PASTA & PIZZA, PASTA & PIZZA, PASTA & PIZZA, PASTA & PIZZA, PASTA & PIZZA, PASTA & PIZZA, PASTA & PIZZA, PASTA & PIZZA
      // PASTA & PIZZA, PASTA & PIZZA, PASTA & PIZZA, PASTA & PIZZA, PASTA & PIZZA, PASTA & PIZZA, PASTA & PIZZA, PASTA & PIZZA
      // PASTA & PIZZA, PASTA & PIZZA, PASTA & PIZZA, PASTA & PIZZA, PASTA & PIZZA, PASTA & PIZZA, PASTA & PIZZA, PASTA & PIZZA
      {
        id: 201,
        name: "Pasta pesto basilika",
        cookTime: 15,
        typeOfRecipe: "pasta-and-pizza",
        ingredients: [
          {
            ingredient: "Fullkornspasta",
            category: "basic"
          },
          {
            ingredient: "Grön pesto",
            category: "basic"
          },
          {
            ingredient: "Vegansk mozzarella",
            category: "basic"
          },
          {
            ingredient: "Soltorkade tomater",
            category: "basic"
          },
          {
            ingredient: "Cocktailtomater",
            category: "basic"
          },
          {
            ingredient: "Peppar",
            category: "Krydda"
          },
          {
            ingredient: "Ruccola",
            category: "Topping"
          },
          {
            ingredient: "Pinjenötter",
            category: "Topping"
          }
        ]
      },
      {
        id: 202,
        name: "Svamppasta med timjan & persilja",
        cookTime: 20,
        typeOfRecipe: "pasta-and-pizza",
        ingredients: [
          {
            ingredient: "Spaghetti, fullkorn",
            category: "basic"
          },
          {
            ingredient: "1 rödlök",
            category: "basic"
          },
          {
            ingredient: "2-3 vitlöksklyftor",
            category: "basic"
          },
          {
            ingredient: "200-250 g skogschampinjoner",
            category: "basic"
          },
          {
            ingredient: "200 ml havregrädde",
            category: "basic"
          },
          {
            ingredient: "Ruccola",
            category: "topping"
          },
          {
            ingredient: "Cocktailtomater",
            category: "topping"
          },
          {
            ingredient: "2-3 msk fryst persilja",
            category: "basic"
          },
          {
            ingredient: "4 msk fryst timjan",
            category: "krydda"
          },
          {
            ingredient: "Salt",
            category: "krydda"
          },
          {
            ingredient: "Peppar",
            category: "krydda"
          },
          {
            ingredient: "Chiliflakes",
            category: "krydda"
          }
        ]
      },
      {
        id: 203,
        name: "Ostig pasta med cannellinibönor",
        cookTime: 30,
        typeOfRecipe: "pasta-and-pizza",
        ingredients: [
          {
            ingredient: "Rigatonipasta",
            category: "basic"
          },
          {
            ingredient: "5 dl plantmjölk (havre eller mandel)",
            category: "basic"
          },
          {
            ingredient: "2 vitlöksklyftor",
            category: "basic"
          },
          {
            ingredient: "1 msk misopasta / vit miso",
            category: "basic"
          },
          {
            ingredient: "1 stor näve babyspenat",
            category: "basic"
          },
          {
            ingredient: "1 paket cannellinibönor",
            category: "basic"
          },
          {
            ingredient: "1/2 tsk torkad timjan",
            category: "krydda"
          },
          {
            ingredient: "2 tsk torkad arrowrot",
            category: "krydda"
          },
          {
            ingredient: "4 msk B-jäst",
            category: "krydda"
          },
          {
            ingredient: "1 msk chiliflakes",
            category: "krydda"
          },
          {
            ingredient: "200 g champinjoner",
            category: "topping"
          }
        ],
        image: "assets/tacos2.jpg"
      }
    ];

    // SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD
    // SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD
    // SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD, SALLAD
    /* { id: 6, name: "Vegansk halloumisallad", cookTime: 30 }, */

    // FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST
    // FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST
    // FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST, FRUKOST
    /* {
        id: 2,
        name: "Overnight Oats med äpple och blåbär",
        cookTime: 10,
        typeOfRecipe: "breakfast",
        ingredients: [
          "1 dl havregryn",
          "1,5 dl mandelmjölk",
          "2 msk chiafrön",
          "1 msk hempafrön",
          "1 krm kanel",
          "1 tsk kardemumma",
          "1 tsk gurkmeja",
          "2 tsk nötsmör",
          "1 tsk tahini",
          "1/2 äpple",
          "3-4 msk blåbär"
        ]
      } */

    /* { id: 2, name: "Porridge with w/ berries & peanut butter", cookTime: 10 },
      { id: 2, name: "Scrambled Tofu on Dark Bread", cookTime: 15 },
      { id: 2, name: "Havregurt & Granola w/ fruit", cookTime: 5 } */

    return {
      allRecipes
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
