import { NgModule } from '@angular/core';

import { FlickityDirective } from './components/flickity/flickity.directive';
import { FlickityChildDirective } from './components/flickity-child/flickity-child.directive';

const DIRECTIVES = [FlickityDirective, FlickityChildDirective];

@NgModule({
    declarations: DIRECTIVES,
    exports: DIRECTIVES
})
export class FlickityModule { }
