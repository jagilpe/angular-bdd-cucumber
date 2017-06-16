import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  greeting = 'Welcome!!';

  greet(): void {
    this.greeting = this.name !== null ? `Welcome ${this.name}!!` : 'Welcome!!';
  }
}
