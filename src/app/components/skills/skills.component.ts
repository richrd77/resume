import { Component } from '@angular/core';

@Component({
  selector: 'ric-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  public skills: string[] = [
    'dotnet',
    'angular',
    'docker',
    'cicd'
  ];
}
