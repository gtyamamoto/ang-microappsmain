import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { load, unload, reload } from 'src/app/htmlelements/actions/elements.actions.factory';

@Component({
  selector: 'shell-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  stateApp1: any;
  // app2 = () => this.store.dispatch(load({ elementRef: 'app2', parent: '#content' }))
  // app1 = () => this.store.dispatch(load({ elementRef: 'app1', parent: '#content' }))
  // tslint:disable-next-line: member-ordering
  list = {
    'app1': {
      initialized: false,
      action: () => this.store.dispatch(load({ elementRef: 'app1', parent: '#content' })),
      payload: () => this.store.dispatch(load({ elementRef: 'app1', parent: '#content' }))
    },
    'app2': {
      initialized: false,
      action: () => this.store.dispatch(load({ elementRef: 'app2', parent: '#content' })),
      payload: () => this.store.dispatch(load({ elementRef: 'app2', parent: '#content' })),
    },
  }
  // $app1Ref: Observable<any>;

  constructor(private store: Store<{}>) {
    // this.$app1Ref = store.select('apps', 'app1');
    // this.$app1Ref.subscribe(data => {
    //   this.stateApp1 = data;
    // })
  }

  ngOnInit() {
  }

  loadComponent(ref) {
    console.log(ref);
    this.list[ref].initialized = true;
    this.list[ref].payload()
    this.list[ref].payload = () => '';

    Object.keys(this.list)
      .filter(cmp => cmp !== ref)
      .map(cmp => {
        this.store.dispatch(unload({ elementRef: cmp }))

        this.list[cmp].payload = this.list[cmp].initialized
          ?
          () => this.store.dispatch(reload({ elementRef: cmp, parent: '#content' }))
          :
          this.list[cmp].action;
      });

  }

}
