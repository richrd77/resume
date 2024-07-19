import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { experience } from '../../models';

@Component({
  selector: 'ric-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  @Input({ required: true }) public exp!: experience;

  @ViewChild('det', { static: false, read: TemplateRef }) private det: TemplateRef<any> | null;

  constructor(private dialog: MatDialog) {
    this.det = null;
  }

  ShowDetail(): void {
    if (this.det) {
      this.dialog.open(this.det);
    }
  }
}
