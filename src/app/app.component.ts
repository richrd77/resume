import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ric-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private title: Title) {
    title.setTitle('Richard Prakash\'s Resume');
  }
}
