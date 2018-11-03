import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-ugly',
  templateUrl: './state-ugly.component.html',
  styleUrls: ['./state-ugly.component.css']
})
export class StateUglyComponent implements OnInit {

  twoWayText: string = "";
  propertyToChild: string = "foo-bar";
  eventIdFromChild: number;

  constructor() { }

  ngOnInit() {
  }

  logEvent(){
    console.log("got event")
  }

  getUpdateFromChild(eventId: number){
    console.log('GOT EVENT', eventId)
    this.eventIdFromChild = eventId;
  }
}
