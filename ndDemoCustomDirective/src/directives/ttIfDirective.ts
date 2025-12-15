import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[ttIf]'
})
export class ttIfDirective {
    _ttif: boolean;

    constructor(
        private templateRef: TemplateRef<any>,
        private _viewContainer: ViewContainerRef
    ){
        this._ttif = false;
    }

    @Input()
    set ttIf(condition: boolean){
        this._ttif = condition;
        this._updateView();
    }

    _updateView(){
        if(this._ttif){
            this._viewContainer.createEmbeddedView(this.templateRef);
        }
        else{
            this._viewContainer.clear();
        }
    }
}