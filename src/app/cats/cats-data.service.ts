import { Cat } from './model';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsDataService {

  private readonly allCats: Cat[] = [
    {
      name: 'Puszek',
      ageMonths: 8,
      breed: 'maine coon',
      picUrls: ['puszek1.jpg', 'cat-icon.png'],
      vaccination: true,
      funFact: "Ma bardzo miękkie futerko",
      adopted: false
    },
    {
      name: 'Mruczek',
      ageMonths: 36,
      breed: 'brytyjczyk',
      picUrls: ['mruczek1.jpg', 'cat-icon.png'],
      vaccination: false,
      funFact: "Swoim mruczeniem potrafi obudzić domowników",
      adopted: false
    },
    {
      name: 'Kiciek',
      ageMonths: 52,
      breed: 'perski',
      picUrls: ['kiciek.jpg', 'cat-icon.png'],
      vaccination: true,
      funFact: "Świetny łowca",
      adopted: false
    },
    {
      name: 'Kłaczek',
      ageMonths: 81,
      breed: 'brytyjczyk',
      picUrls: ['klaczek.jpg', 'cat-icon.png'],
      vaccination: false,
      funFact: "Wbrew pozorom nie zostawia dużo futra",
      adopted: false
    },
    {
      name: 'Pimpuś',
      ageMonths: 6,
      breed: 'dachowiec',
      picUrls: ['pimpus.jpg', 'cat-icon.png'],
      vaccination: true,
      funFact: "Umie podawać łapę",
      adopted: false
    }
  ];


  getCatsData(): Observable<Cat[]> {
    return of(this.allCats);
  }

  getCat(name: string): Observable<Cat > {
    return of(this.allCats.find(c => c.name === name)!);
  }
}
