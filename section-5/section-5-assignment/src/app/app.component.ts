import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  allNumbers: number[] = [];
  value = 10;

  onIntervalEmit(lastInterval: number): void {
    this.allNumbers.push(lastInterval);
  }
}
