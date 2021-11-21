// "no strict"

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skaiciuokle',
  templateUrl: './skaiciuokle.component.html',
  styleUrls: ['./skaiciuokle.component.css']
})
export class SkaiciuokleComponent implements OnInit {
  mase: number;
  ugis: number;
  kmi: number;
  message: string;
  svoriai = [18.5, 25, 30, 35, 40, 99];

  skaiciuotiKMI(ma, ug) {
    this.kmi = undefined;
    if (!ma || !ug) {
      this.message = "Neįvesti duomenys";
      console.log("mase2 =", ma, "ugis2 = ", ug, "kmi2 =", this.kmi);
      return;
    }


    if (ma <= 0 || ug <= 0) {
      this.message = "Įvesti neteisingi duomenys";
      console.log("mase1 =", ma, "ugis1 = ", ug, "kmi1 =", this.kmi);

      return;
    }

    this.kmi = Number.parseFloat((Math.round(ma / Math.pow(ug / 100, 2) * 100) / 100).toFixed(2));
  }

  setColor(s1, s2) {
    if (this.kmi > s1 && this.kmi > s2) return 'purple'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
