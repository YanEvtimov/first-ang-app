import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from './project.model';
import { NgForm } from '@angular/forms';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('changeState', [
      state('invisible', style({
        'background-color': 'red',
        transform: 'translateY(-100px)'
      })),
      state('visible', style({
        'background-color': 'blue',
        transform: 'translateY(0)'
      }))
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  state = 'invisible';

  info: any = {};

  public show: boolean = false;
  public buttonName: any = 'add project';

  @ViewChild('add') addProject: NgForm;

  projects: Project[] = [
    new Project('Just a Test', 'https://www.jpl.nasa.gov/spaceimages/details.php?id=PIA22835'),
    new Project(this.info.heading, '../../../assets/images/logIn.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onOpenForm() {
    this.show = !this.show;

    if (this.show)
      this.buttonName = "close";
    else
      this.buttonName = "add project";
  }

  onAddProject() {
    console.log('yay!');

    return this.projects.push(new Project(this.info.heading, this.info.path));
  }

}
