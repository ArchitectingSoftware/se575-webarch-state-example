import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  twoWayText: string;
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
