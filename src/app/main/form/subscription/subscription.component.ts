import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StoreDataService } from 'src/app/services/server.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
  styles: [':host {width: 100%;}'],
  animations: [
    trigger('viewSubscibersAnimation', [
      state('open', style({
        opacity: 1,
        height: '100%'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          height: '0px'
        }),
        animate(500)
      ]),
    ])
  ]
})
export class SubscriptionComponent implements OnInit {
  data: any = {};
  names: string;

  @ViewChild('f')  singupForm: NgForm;

  constructor(private storeDataService: StoreDataService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.storeDataService.storeData(this.data)
      .subscribe(
        (response) => console.log(response),
        (error) => alert(error + ' occured, your subscription was not successfull.')
      );
    this.singupForm.reset();
    alert('Thank you for your subscription, ' + this.data.name + ', you can now add your own project templates!');
  }

  getSubscribers() {
    this.storeDataService.getData()
      .subscribe(
        (response: any []) => {
          //alert("Vielen dank на все наши subscribers: " + /*this.newdata = */response.map(v => v.name).join(', ') + "!");
          return this.names = response.map(v => v.name).join(', ');
        },
        (error) => alert(error + ' occured, you cannot currently see a list of our subscribers.')
      );
  }

  closeArticle() {
    this.names = undefined;
  }
}
