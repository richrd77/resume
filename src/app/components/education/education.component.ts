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
export class EducationComponent {
  public edus: Edu[] = [
    {
      stream: 'BE (Electrical and Electronics Engineering)',
      college: 'PES', from: 'aug 2008', to: 'Jun 2012'
    },
    {
      stream: 'PU (Science)',
      college: 'Shri Duttagiri Maharaj PU College', from: 'jun 2006', to: 'Jun 2008'
    },
  ];
}
