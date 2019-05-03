import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tooltipcontent',
  templateUrl: './tooltipcontent.component.html',
  styleUrls: ['./tooltipcontent.component.scss']
})
export class TooltipcontentComponent implements OnInit {
  @Input() tooltipBody: string;
  @Input() classContent: string;
  constructor() {}

  ngOnInit() {
    console.log(this.classContent);
  }
}
