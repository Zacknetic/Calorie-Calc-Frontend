import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Calorie-Calc-Frontend';

  constructor() {
    this.changeTitle();
  }


  changeTitle(): void {
    let counter: number = 0;
    setInterval(() => {
      this.title = `This counter is: ${counter}`
      counter++;
    }, 1000)
  }
}
