import { Component } from '@angular/core';
//import "hello-world-Component.css";

@Component({
  selector: 'app-hello-world-component',
  imports: [],
  templateUrl: './hello-world-component.html',
  styleUrl: './hello-world-component.css',
})
class HelloWorldComponent {
  title='Hello World'
}
export { HelloWorldComponent };