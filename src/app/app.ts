import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestiLib, Ppppppp } from 'testi-lib'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestiLib, Ppppppp],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('test-new-app');
}
