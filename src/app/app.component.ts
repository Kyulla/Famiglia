import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Famiglia';
  numeriRomani: string[] = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  numeriPariRomani = this.numeriRomani.filter((_, index) => index % 2 === 0);
  numeriDispariRomani = this.numeriRomani.filter((_, index) => index % 2 !== 0);
}
