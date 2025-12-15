import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector: "[ttClass]"
})
export class ttClassDirective implements OnInit {

    @Input() ttClass: string ;
    // private el: ElementRef;

    // constructor(el: ElementRef) {
    //     this.el = el;
    // }
    constructor(private el: ElementRef) {
        this.ttClass = '';
     }

    ngOnInit(): void {
        this.el.nativeElement.classList.add(this.ttClass);
    }
}