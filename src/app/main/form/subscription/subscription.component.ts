import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StoreDataService } from 'src/app/services/server.service';
//import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
  styles: [':host {width: 100%;}']
})
export class SubscriptionComponent implements OnInit {
  data: any = {};

  @ViewChild('f')  singupForm: NgForm;

  constructor(private storeDataService: StoreDataService) { }

  ngOnInit() {
  }

//  onSubmit(form: NgForm) {
//    console.log(form)
//  }
  
  onSubmit() {
    this.storeDataService.storeData(this.data)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    //alert(JSON.stringify(this.data));
    //this.post('http://localhost:3000/subscribers', JSON.stringify(this.data));
  }

}
