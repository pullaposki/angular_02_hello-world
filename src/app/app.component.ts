import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloworldComponent } from './helloworld.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloworldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '02_hello-world';
}
