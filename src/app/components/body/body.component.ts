import { Component } from '@angular/core';
import { experience, qualification } from 'src/app/models';

@Component({
  selector: 'ric-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  public exp: experience[] = [
    { comp: 'Infosys', prof: 'Technology Lead', time: 'Jun 2023 - till date', desc: 'infosys acquired Danske IT and working under same project as in Danske IT' },
    { comp: 'Danske IT', prof: 'Software Engineer', time: 'Jun 2020 - Jun 2023', desc: 'worked on many projects with dotnet core as backend and angular as the front end and worked on the openshift and aws cloud platforms' },
    { comp: 'CGI', prof: 'Senior Software Engineer', time: 'Jun 2018 - Jun 2020', desc: 'supported an app with dotnet core as backend and angular as the front end and worked on the azure cloud platform' },
    { comp: 'HCL Technologies', prof: 'Senior Software Engineer', time: 'Dec 2013 - Jun 2018', desc: 'supported many apps with .NET framework and SharePoint 2013' },
  ];

  public qualifications: qualification[] = [
    { deg: 'Bachelors in Engineering (EEE)', uni: 'PES Inistitute of Technology', tim: '2008-2012' },
    { deg: 'Pre-university (Science)', uni: 'Shri Duttagiri Maharaj', tim: '2006-2008' },
    { deg: 'Higher Secondary Education', uni: 'Seventh-day adventist', tim: '2006' },
  ];

  public get PopulateYears(): string {
    const startDate = new Date(2013, 11, 4);
    const endDate = new Date();
    const months = startDate.getMonth() - endDate.getMonth() + 2;
    let years = endDate.getFullYear() - startDate.getFullYear();

    years = startDate.getMonth() > endDate.getMonth() ? years - 1 : years;

    return months ? `${years} years and ${months} months` : `${years} years`;
  }
}
