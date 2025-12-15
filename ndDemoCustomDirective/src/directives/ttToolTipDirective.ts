import { Directive, ElementRef, Renderer2, Input, HostListener } from "@angular/core";

@Directive({
    selector: '[ttTooltip]'
})
export class ttTooltipDirective{
    @Input() toolTip: string;
    elTooltip: any;

    constructor(private elementRef: ElementRef, private renderer: Renderer2){
        this.toolTip='';
    }

    @HostListener('mouseenter')
    onMouseEnter(){
        if(!this.elTooltip){
            this.showHint();
        }
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        if(this.elTooltip){
            this.removeHint();
        }
    }

    removeHint(){
        this.renderer.removeClass(this.elTooltip, 'tooltip');
        this.renderer.removeChild(document.body, this.elTooltip);
        this.elTooltip=null;
    }

    showHint(){
        this.elTooltip = this.renderer.createElement('span');
        const text=this.renderer.createText(this.toolTip);
        this.renderer.appendChild(this.elTooltip, text);

        this.renderer.appendChild(document.body, this.elTooltip);
        this.renderer.addClass(this.elTooltip, 'tooltip');

        let hostPos = this.elementRef.nativeElement.getBoundingClientRect();
        //let tooltipPos=this.elTooltip.getBoundingClientRect();

        let top = hostPos.bottom/2;
        let left=(hostPos.right-hostPos.left)/2;

        this.renderer.setStyle(this.elTooltip, 'top', `${top}px`);
        this.renderer.setStyle(this.elTooltip, 'left', `${left}px`);
    }
}