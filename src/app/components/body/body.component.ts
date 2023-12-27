import { Component } from '@angular/core';
import { experience } from 'src/app/models';

@Component({
  selector: 'ric-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  public exp: experience[] = [
    { comp: 'Infosys', prof: 'Technical Lead', time: 'Jun 2023 - till date', desc: 'infosys acquired Danske IT and working under same project as in Danske IT' },
    { comp: 'Danske IT', prof: 'Software Engineer', time: 'Jun 2020 - Jun 2023', desc: 'worked on many projects with dotnet core as backend and angular as the front end and worked on the openshift and aws cloud platform' },
    { comp: 'CGI', prof: 'Senior Software Engineer', time: 'Jun 2018 - Jun 2020', desc: 'supported an app with dotnet core as backend and angular as the front end and worked on the azure cloud platform' },
    { comp: 'HCL Technologies', prof: 'Senior Software Engineer', time: 'Dec 2013 - Jun 2018', desc: 'supported many apps with .NET framework and SharePoint 2013' },
  ];

}
