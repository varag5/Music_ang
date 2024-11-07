export class Song {
  public id: number;                // A dal egyedi azonosítója
  public songTitle: string;         // A dal címe
  public duration: number;          // A dal hossza másodpercekben
  public albumId: number;           // Az album azonosítója, amelyhez a dal tartozik
  public artistId: number;          // Az előadó azonosítója
  public genreId: number;           // A zenei műfaj azonosítója

  constructor(id: number, songTitle: string, duration: number, albumId: number, artistId: number, genreId: number) {
    this.id = id;                   // Az azonosító inicializálása
    this.songTitle = songTitle;     // A dal címének inicializálása
    this.duration = duration;       // A dal hosszának inicializálása
    this.albumId = albumId;         // Az album azonosítójának inicializálása
    this.artistId = artistId;       // Az előadó azonosítójának inicializálása
    this.genreId = genreId;         // A zenei műfaj azonosítójának inicializálása
  }
}
