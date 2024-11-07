// album.ts
export class Album {
    public albumId: number;        // Az album azonosítója
    public title: string;          // Az album címe
    public releaseDate: Date;      // Az album megjelenési dátuma
    public artistId: number;       // Az albumhoz tartozó művész azonosítója

    constructor(albumId: number, title: string, releaseDate: Date, artistId: number) {
        this.albumId = albumId;
        this.title = title;
        this.releaseDate = releaseDate;
        this.artistId = artistId;
    }
}
