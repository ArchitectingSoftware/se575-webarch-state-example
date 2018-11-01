import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-state-child',
  templateUrl: './state-child.component.html',
  styleUrls: ['./state-child.component.css']
})
export class StateChildComponent implements OnInit {

  stateFullCounter = 0;
  @Input() inProperty: string
  @Output() updateEvent : EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log("bootstrap property", this.inProperty)
  }

  sendEvent(){
    console.log('Sending event',this.stateFullCounter)
    this.updateEvent.emit(this.stateFullCounter);
    this.stateFullCounter++;
  }
}
