import { Component, OnInit } from '@angular/core';

import { Subject, of, timer } from 'rxjs';
import { debounce, map, distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  debounce_text = '';
  $dbounce = new Subject<string>();

  constructor() {
    this.debounce_obs_setup();
  }

  debounce_obs_setup(){
    console.log('setup of $debounce obs')
    this.$dbounce.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(data => this.debounce_text = data)
  }

  ngOnInit() {
  }

  demo1(){
    console.log('In DEMO 1')
    const example = of('WAIT', 'ONE', 'SECOND', 'Last will display');
    /*
        Only emit values after a second has passed between the last emission,
        throw away all other values
    */
    const debouncedExample = example.pipe(debounce(() => timer(1000)));
    /*
        In this example, all values but the last will be omitted
        output: 'Last will display'
    */
    const subscribe = example.subscribe(val => console.log(val));
  }

  debounce_demo(event: any){
    //console.log(event.target.value)
    const x_obs = of(event.target.value)
    x_obs.pipe( debounce(() => timer(1000))).subscribe(val => console.log('dbg',val));

  }

}
