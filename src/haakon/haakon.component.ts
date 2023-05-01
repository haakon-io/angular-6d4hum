import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/base';

@Component({
  selector: 'app-haakon',
  templateUrl: './haakon.component.html',
  styleUrls: ['./haakon.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class HaakonComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    this.title = 'Haakon';
  }
}
