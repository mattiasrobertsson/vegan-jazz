import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-mobile-menu",
  templateUrl: "./mobile-menu.component.html",
  styleUrls: ["./mobile-menu.component.scss"],
})
export class MobileMenuComponent implements OnInit {
  routerURL: string;
  toggleMenuBar: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.routerURL = this.router.url;
    this.toggleMenuBar = false;
  }

  toggleMenu() {
    this.toggleMenuBar = !this.toggleMenuBar;
  }
}
