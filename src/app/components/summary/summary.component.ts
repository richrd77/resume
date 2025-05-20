import { Component } from '@angular/core';

@Component({
  selector: 'ric-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

  private elapsedMonths: number;
  private elapsedYears: number;


  constructor() {
    const careerStart = new Date(2013, 11);
    const today = new Date();
    this.elapsedYears = today.getFullYear() - careerStart.getFullYear();
    this.elapsedMonths = today.getMonth() - careerStart.getMonth();
    // Adjust if current month is before December
    if (this.elapsedMonths < 0) {
      this.elapsedYears--;
      this.elapsedMonths += 12;
    }
  }

  public get displayableYear(): string {
    return this.elapsedYears < 10 ? `0${this.elapsedYears}` : `${this.elapsedYears}`;
  }

  public get displayableMonths(): string {
    return this.elapsedMonths < 10 ? `0${this.elapsedMonths}` : `${this.elapsedMonths}`;
  }

  public get Monthadjective(): string {
    return this.elapsedMonths > 0 ? (this.elapsedMonths === 1 ? `month` : `months`) : ``;
  }
}
