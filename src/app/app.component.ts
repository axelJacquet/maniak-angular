import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import {Subscription} from 'rxjs/Subscription'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

secondes: number;
counterSubscription: Subscription;
ngOnInit() {
  const counter = Observable.interval(1000);
  counter.subscribe(
    (value) => {
      this.secondes = value;
    },
    (error) => {
      console.log('Uh-oh, an error occurred! : ' + error);
    },
    () => {
      console.log('Observable complete!');
    }
  );
}

ngOnDestroy() {
   this.counterSubscription.unsubscribe();
 }
}
