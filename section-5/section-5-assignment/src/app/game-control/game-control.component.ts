import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  @Output() intervalEmitter = new EventEmitter<number>();
  interval;
  lastInterval = 1;

  startInterval(): void {
    this.interval = setInterval(() => {
      this.intervalEmitter.emit(this.lastInterval);
      this.lastInterval++;
    }, 1000);
  }

  stopInterval(): void {
    clearInterval(this.interval);
  }
}
