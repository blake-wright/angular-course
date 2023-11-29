import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless/unless.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
