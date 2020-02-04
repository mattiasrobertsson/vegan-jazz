import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mobile-menu",
  templateUrl: "./mobile-menu.component.html",
  styleUrls: ["./mobile-menu.component.scss"]
})
export class MobileMenuComponent implements OnInit {
  toggleMenuBar: boolean;
  constructor() {}

  ngOnInit() {
    this.toggleMenuBar = false;
  }

  /* function myFunction(x) {
    x.classList.toggle("change");
  } */

  toggleMenu() {
    this.toggleMenuBar = !this.toggleMenuBar;
  }
}
