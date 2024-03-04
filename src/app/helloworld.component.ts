import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello-world',
  standalone: true,
  templateUrl: './helloworld.component.html',
  styleUrl: './helloworld.component.css',
})
export class HelloworldComponent {
  @Input()
  name!: string;
}
