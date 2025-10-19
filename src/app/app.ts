import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./footer/footer";
import { Navbar } from "./navbar/navbar";


@Component({
  selector: 'app-root',
  imports: [Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  date = new Date();
  dateText :string [] = ["ច័ន្ទ","អង្គារ","ពុធ","ព្រហស្បតិ៍","សៅរិ៍","អាទិត្យ"];
  dateMonth: string[] = ["មករា","កុម្ភៈ","មិនា","មេសា","ឩសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ",]


  getFullDateKhmer(): string {
    const dayName = this.dateText[this.date.getDay()];
    const dayNumber = this.date.getDate();
    const monthName = this.dateMonth[this.date.getMonth()];
    const year = this.date.getFullYear();

    // Construct the final string
    // Format: ថ្ងៃ[DayName] ទី[DayNumber] ខែ[MonthName] ឆ្នាំ[Year]
    return `ថ្ងៃ${dayName} ទី${dayNumber} ខែ${monthName} ឆ្នាំ${year}`;
  }
  time = new Date();
  time1 = this.time.getHours();

  text = signal("");
  textFormat (event : Event){
   const input = event.target as HTMLInputElement;

   this.text.set(input.value.toLowerCase())

  }
}