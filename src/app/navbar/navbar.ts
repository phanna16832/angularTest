import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive  } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  navItem = [
    {label:"ទំព័រដើម", path:"/"} ,
    {label: "គណនា", path: "/calculate"},
  ];
}
