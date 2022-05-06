import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-desktop-menu",
  templateUrl: "./desktop-menu.component.html",
  styleUrls: ["./desktop-menu.component.scss"],
})
export class DesktopMenuComponent implements OnInit {
  routerURL: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.routerURL = this.router.url;
  }
}
