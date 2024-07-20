import { Component } from '@angular/core';

@Component({
  selector: 'ric-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  public skills: string[] = [
    'C#', 'TypeScript', '.NET', 'dotnet core', 'ASP.NET MVC', 'Web API', 'LINQ', 'Entity Framework', 'EF Core', 'Angular', 'HTML & CSS', 'JavaScript', 'JQuery', 'SQL', 'IBM DB2', 'Oracle Db', 'Node Js', 'Azure devops ci/cd pipelines', 'Docker', 'xUnit'
  ];
}
