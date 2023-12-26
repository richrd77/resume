import { Component } from '@angular/core';

@Component({
  selector: 'ric-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  public skills: string[] = [
    'C#', 'dotnet core', 'angular', 'Entity Framework', 'HTML', 'JavaScript', 'CSS', 'Containers'
  ];
}
