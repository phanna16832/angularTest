import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true, // ✅ for standalone component
  imports: [],
  templateUrl: './calculator.html',
  styleUrls: ['./calculator.css'] // ✅ must be plural
})
export class Calculator {
  rmbInput = signal<number>(0);
  selectedRate = signal<number>(6.0);
  totalUsd = signal<number>(0);
  rates = [6, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6];

  // ✅ Convert input to number and calculate automatically
  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.rmbInput.set(Number(value));
    this.calculate1();
  }

  onRateChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedRate.set(parseFloat(value));
    this.calculate1();
  }

  calculate1() {
    const total = Number(this.rmbInput()) / this.selectedRate();
    this.totalUsd.set(Number(total.toFixed(2)));
  }
}
