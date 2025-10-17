import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class Calculator {
rmbInput = signal("");
rates = [6, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6]
}
