import { Component } from '@angular/core';

interface Edu {
  stream: string;
  college: string;
  from: string;
  to: string;
}

@Component({
  selector: 'ric-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent { }
