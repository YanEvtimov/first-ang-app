import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from './project.model';
import { NgForm } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('changeState', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(-100px)'
        }),
        animate(150)
      ]),
    ]),
    trigger('addPro', [
      state('new', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(-100px)'
        }),
        animate(250)
      ]),
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  info: any = {};

  public show: boolean = false;
  public buttonName: any = 'add project';

  @ViewChild('add') addProject: NgForm;

  projects: Project[] = [];

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
    this.show = !this.show;

    if (this.show)
      this.buttonName = "close";
    else
      this.buttonName = "add project";

    this.projects.push(new Project(this.info.heading, this.info.path));
  }

}
