import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Calculate } from "./calculate/calculate";


@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet, Calculate],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}