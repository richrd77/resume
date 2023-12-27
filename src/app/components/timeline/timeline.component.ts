import { Component, Input } from '@angular/core';
import { experience } from 'src/app/models';

@Component({
  selector: 'ric-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  @Input({ required: true }) public exp!: experience;
}
