import { Component } from '@angular/core';

interface qualification {
  deg: string;
  uni: string;
  tim: string;
}

@Component({
  selector: 'ric-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  public skills: string[] = [
    'C#', 'dotnet core', 'angular', 'Entity Framework', 'HTML', 'JavaScript', 'CSS', 'Containers'
  ];

  public qualifications: qualification[] = [
    { deg: 'Bachelors in Engineering (EEE)', uni: 'PES Inistitute of Technology', tim: '2008-2012' },
    { deg: 'Pre-university (Science)', uni: 'Shri Duttagiri Maharaj', tim: '2006-2008' },
    { deg: 'Higher Secondary Education', uni: 'Seventh-day adventist', tim: '2006' },
  ];
}
