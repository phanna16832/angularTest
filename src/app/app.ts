import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./footer/footer";
import { Navbar } from "./navbar/navbar";
import { Calculator } from './calculator/calculator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Footer, Navbar, Calculator],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   text: string = "";

  clickBtn(){
    this.text = "សារសម្រាប់តេស្តសាកល្បងបូតុង";
    setTimeout(() =>{
      this.text = "";
    }, 5000)
  }


}
