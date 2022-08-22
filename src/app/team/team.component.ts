import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  title: string | undefined;
  titles: string[];
  constructor() {}

  ngOnInit(): void {
    this.titles = ['Teams Component - Original', 'Teams Component - Changed'];
    this.title = this.titles[0];
  }

  onChangeTitle() {
    this.title = this.titles.find((title) => title != this.title);
  }
}
