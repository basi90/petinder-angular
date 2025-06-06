import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  private _year: number;

  constructor() {
    this._year= new Date().getFullYear()
  }

  get year(): number {
    return this._year;
  }
}
