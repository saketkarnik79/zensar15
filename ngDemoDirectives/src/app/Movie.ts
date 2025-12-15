class Movie{
    title: string;
    director: string;
    cast: string;
    releaseDate: string;

    constructor(title: string, director: string, cast: string, releaseDate: string){
        this.title = title;
        this.director = director;
        this.cast = cast;
        this.releaseDate = releaseDate;
    }
}

export { Movie };