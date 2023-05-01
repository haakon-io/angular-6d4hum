import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/base';

@Component({
  selector: 'app-quin',
  templateUrl: './quin.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./quin.component.css'],
})
export class QuinComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    this.title = 'Quin';
  }
}
