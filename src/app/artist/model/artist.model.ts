// artist.ts
//import { Genre } from './genre'; // A Genre osztály importálása

export class Artist {
  public id: number;                // Az artist egyedi azonosítója
  public name: string;              // Az artist neve
  public genreId: number;           // Az artisthoz tartozó genre azonosítója

  constructor(id: number, name: string, genreId: number) {
    this.id = id;                   // Az azonosító inicializálása
    this.name = name;               // A név inicializálása
    this.genreId = genreId;         // A genre azonosító inicializálása
  }
}
