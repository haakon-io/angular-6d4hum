import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/base';

@Component({
  selector: 'app-luke',
  templateUrl: './luke.component.html',
  styleUrls: ['./luke.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class LukeComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    this.title = 'Luke';
  }
}
