
import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { load, loadsingle } from './htmlelements/actions/elements.actions.factory';
@Component({
  selector: 'shell-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shell';
 
  constructor(private store: Store<{}>) {
  }

  loadApp1(){
    this.store.dispatch(loadsingle({elementRef:'app1',parent:'#content'}));

  }
  loadApp2(){
    this.store.dispatch(loadsingle({elementRef:'app2',parent:'#content'}));
  }
  

  ngOnInit(): void {
    this.store.dispatch(load({ elementRef: 'header', parent: 'header' }))
      ;
  }
}
