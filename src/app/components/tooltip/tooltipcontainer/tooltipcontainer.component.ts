import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tooltipcontainer',
  templateUrl: './tooltipcontainer.component.html',
  styleUrls: ['./tooltipcontainer.component.scss']
})
export class TooltipcontainerComponent implements OnInit {
  @Input() tooltipBody: string;
  @Input() hideTooltip: boolean;
  @Input() classContainer: string;
  @Input() classContent: string;
  constructor() {}

  ngOnInit() {}
}
