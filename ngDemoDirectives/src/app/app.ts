import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Movie } from './Movie';
import { CommonModule, NgForOf } from '@angular/common';

type ViewMode = 'list' | 'grid' | 'table' | 'unknown';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgForOf, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Top 5 Movies');

  mode = signal<ViewMode>('list');
  showDetails = signal<boolean>(false);
  primary="primary";
  big="big";
  cssClass={
    primary: true,
    big: true,
    italics: true
  };

  trackByTitle(index: number, movie: Movie): string {
    return movie.title;
  }

  toggle(){
    this.showDetails.update(value => !value);
  }

  setMode(next: ViewMode) {
    this.mode.set(next);
  }

  movies: Movie[] = [
    {
      title: 'The Shawshank Redemption',
      director: 'Frank Darabont',
      cast: 'Tim Robbins, Morgan Freeman, Bob Gunton',
      releaseDate: '1994-09-22'
    },
    {
      title: 'The Godfather',
      director: 'Francis Ford Coppola',
      cast: 'Marlon Brando, Al Pacino, James Caan',
      releaseDate: '1972-03-24'
    },
    {
      title: 'The Dark Knight',
      director: 'Christopher Nolan',
      cast: 'Christian Bale, Heath Ledger, Aaron Eckhart',
      releaseDate: '2008-07-18'
    },
    {
      title: 'Pulp Fiction',
      director: 'Quentin Tarantino',
      cast: 'John Travolta, Uma Thurman, Samuel L. Jackson',
      releaseDate: '1994-10-14'
    },
    {
      title: 'Forrest Gump',
      director: 'Robert Zemeckis',
      cast: 'Tom Hanks, Robin Wright, Gary Sinise',
      releaseDate: '1994-07-06'
    }
  ];
}
