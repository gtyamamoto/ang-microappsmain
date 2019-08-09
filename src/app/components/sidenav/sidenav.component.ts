import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadsingle } from 'src/app/htmlelements/actions/elements.actions.factory';
import { Observable } from 'rxjs';

@Component({
  selector: 'shell-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  stateApp1: any;
  stateApp2: any;
  $app1Ref: Observable<any>;
  $app2Ref: Observable<any>;
  // app2 = () => this.store.dispatch(load({ elementRef: 'app2', parent: '#content' }))
  // app1 = () => this.store.dispatch(load({ elementRef: 'app1', parent: '#content' }))
  // tslint:disable-next-line: member-ordering
  

  constructor(private store: Store<{}>) {
  
  }

  ngOnInit() {
  }

  loadComponent(ref) {
   this.store.dispatch(loadsingle({elementRef:ref,parent:'#content'}))
  }

}
