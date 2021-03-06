import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  twoWayText: string = "";
  propertyToChild: string = "foo-bar";
  eventIdFromChild: number;
  public viewFormatted:boolean = true;

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

  selectViewType(prop: boolean){
    this.viewFormatted = prop
  }

}
