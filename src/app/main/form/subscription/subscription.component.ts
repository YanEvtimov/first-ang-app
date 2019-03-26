import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StoreDataService } from 'src/app/services/server.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
  styles: [':host {width: 100%;}']
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
        (error) => console.log(error)
      );
    
    alert('Thank you for your subscription, ' + this.data.name + ', you can now add your own project templates!');
  }
  
  getSubscribers() {
    this.storeDataService.getData()
      .subscribe(
        (response: any []) => {
          //alert("Vielen dank на все наши subscribers: " + /*this.newdata = */response.map(v => v.name).join(', ') + "!");
          return this.names = response.map(v => v.name).join(', ');
        },
        (error) => console.log(error)
      );
  }

  closeArticle() {
    this.names = '';
  }
}
