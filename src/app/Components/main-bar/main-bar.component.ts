import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/example.model';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss'],
})
export class MainBarComponent implements OnInit {
 
  @Input() name;


  users: User[] = [
    {name: 'Fifie', desc: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum perspiciatis alias id blanditiis vitae unde eveniet cupiditate nostrum repudiandae eaque. Cum sapiente at omnis sed. Minus deleniti architecto quam sunt.'},
    {name: 'Khuthy', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum perspiciatis alias id blanditiis vitae unde eveniet cupiditate nostrum repudiandae eaque. Cum sapiente at omnis sed. Minus deleniti architecto quam sunt.'},
    {name: 'Terence', desc: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum perspiciatis alias id blanditiis vitae unde eveniet cupiditate nostrum repudiandae eaque. Cum sapiente at omnis sed. Minus deleniti architecto quam sunt.'},
  ]
 
  constructor() {

   }

  ngOnInit() {}


  /* getUsers() {
    return [...this.users];
  } */

}
