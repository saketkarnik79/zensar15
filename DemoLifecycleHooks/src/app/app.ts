import { Component, signal, OnInit, OnChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnChanges, OnInit {
  protected readonly title = signal('DemoLifecycleHooks');

  data:string="";

  constructor(){
    console.log('App Component: Constructor Invoked...');
    //any component initialization code can be placed here
    console.log('App component is constructed...');
  }

  changeData(){
    this.data = "New data!";
  }

  ngOnChanges(): void {
      console.log('App Component: ngOnChanges() is invoked...');
  }

  ngOnInit(): void {
      console.log('App Component: ngOnInit() is invoked...');
  }

  ngDoCheck():void{
    console.log('App Component: ngDoCheck() is invoked...');
  }

  ngAfterContentInit(): void{
    console.log('App Component: ngAfterContentInit() is invoked...');
  }

  ngAfterContentChecked(): void{
    console.log('App Component: ngAfterContentChecked() is invoked...');
  }

  ngAfterViewtInit(): void{
    console.log('App Component: ngAfterViewInit() is invoked...');
  }

  ngAfterViewChecked(): void{
    console.log('App Component: ngAfterViewChecked() is invoked...');
  }

  ngOnDestroy(): void{
    console.log('App Component: ngOnDestroy() is invoked...');
  }
}
