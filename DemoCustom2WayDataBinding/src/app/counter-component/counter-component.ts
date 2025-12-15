import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  imports: [],
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.css',
})
export class CounterComponent {
  @Input() count: number = 0;
  @Output() countChanged: EventEmitter<number> = new EventEmitter<number>();

  increment(){
    this.count++;
    this.countChanged.emit(this.count);
  }

  decrement(){
    if(this.count > 0){
      this.count--;
      this.countChanged.emit(this.count);
    }
  }
}
