// genre.ts
export class Genre {
    public genreId: number;  // A műfaj azonosítója
    public name: string;      // A műfaj neve

    constructor(genreId: number, name: string) {
        this.genreId = genreId;
        this.name = name;
    }
}
