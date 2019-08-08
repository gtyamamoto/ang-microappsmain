import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/state.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { load, unload } from 'src/app/htmlelements/actions/elements.actions.factory';

@Component({
  selector: 'shell-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  stateApp1: any;
  app2 = () => this.store.dispatch(load({ elementRef: 'app2', parent: '#content' }))
  app1 = () => this.store.dispatch(load({ elementRef: 'app1', parent: '#content' }))
  // tslint:disable-next-line: member-ordering
  list = {
    'app1': {
      action: this.app1,
      payload: this.app1
    },
    'app2': {
      action: this.app2,
      payload: this.app2
    },
  }
 // $app1Ref: Observable<any>;

  constructor( private store: Store<{}>) {
    // this.$app1Ref = store.select('apps', 'app1');
    // this.$app1Ref.subscribe(data => {
    //   this.stateApp1 = data;
    // })
  }

  ngOnInit() {
  }

  loadComponent(ref) {
    console.log(ref);
    this.list[ref].payload()
    this.list[ref].payload = () => '';

    Object.keys(this.list)
      .filter(cmp => cmp !== ref)
      .map(cmp => {
        this.store.dispatch(unload({ elementRef:cmp }))
        this.list[cmp].payload = this.list[cmp].action;
      });

  }

}
