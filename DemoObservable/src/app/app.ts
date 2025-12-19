import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, Subscription, filter, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('Demo Observable');

  obs:Observable<number>=new Observable<number>((observer)=>{
    observer.next(1),
      observer.next(2),
      observer.next(3),
      observer.next(4),
      observer.next(5),
      observer.next(6),
      observer.next(7),
      observer.next(8),
      observer.next(9),
      observer.next(10),
      observer.complete()
  });  

  sub?: Subscription;

  // obs = new Observable<string>((observer) => {
  //   // let count = 0;
  //   // setInterval(() => {
  //   //   observer.next(`Count: ${++count}`);
  //   // }, 500);

  //   let count = 0;
  //   const intervalId = setInterval(() => {
  //     console.log('Emitting value');
  //     if(count<10){
  //        observer.next(`Count: ${++count}`);
  //     }
  //     else{
  //       observer.complete();
  //       clearInterval(intervalId);
  //       console.log('Observable torn down');
  //     }
  //   }, 500);
  // });

  ngOnInit(): void {
    // this.obs.subscribe({
    //   next: (value) => {
    //     console.log('Received value: ', value);
    //   },
    //   error: (err) => {
    //     console.error('Error occurred: ', err);
    //   },
    //   complete: () => {
    //     console.log('Observable completed');
    //   }
    // });
     this.sub = this.obs.pipe(
      filter((data) => data % 2 == 0),
      map((data) => data * 2)
     ).subscribe((result) => {
      console.log(result);
     }
  );
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}