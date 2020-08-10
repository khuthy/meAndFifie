import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/example.model';

@Component({
  selector: 'app-sub-bar',
  templateUrl: './sub-bar.component.html',
  styleUrls: ['./sub-bar.component.scss'],
})
export class SubBarComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {}

}
