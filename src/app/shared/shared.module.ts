import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { EnlargeFontDirective } from './directives/enlarge-font/enlarge-font.directive';

@NgModule({
  declarations: [
    HighlightDirective,
    EnlargeFontDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    EnlargeFontDirective
  ]
})
export class SharedModule { }
