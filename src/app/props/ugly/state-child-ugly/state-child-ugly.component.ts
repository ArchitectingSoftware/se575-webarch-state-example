import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-state-child-ugly',
  templateUrl: './state-child-ugly.component.html',
  styleUrls: ['./state-child-ugly.component.css']
})
export class StateChildUglyComponent implements OnInit {
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
