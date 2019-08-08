import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { load, unload, reload } from 'src/app/htmlelements/actions/elements.actions.factory';
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
  list = {
    'app1': {
      action: () => this.store.dispatch(load({ elementRef: 'app1', parent: '#content' })),
      payload: () => this.store.dispatch(load({ elementRef: 'app1', parent: '#content' }))
    },
    'app2': {
      action: () => this.store.dispatch(load({ elementRef: 'app2', parent: '#content' })),
      payload: () => this.store.dispatch(load({ elementRef: 'app2', parent: '#content' })),
    },
  }

  constructor(private store: Store<{}>) {
    this.$app1Ref = store.select('apps','app1','loaded');
    this.$app1Ref.subscribe(data => {
      this.stateApp1 = data;
      if (this.stateApp1) {
        this.list['app1'].action = this.stateApp1.initialized
          ? () => this.store.dispatch(reload({ elementRef: 'app1', parent: '#content' }))
          : () => this.store.dispatch(load({ elementRef: 'app1', parent: '#content' }))


        Object.keys(this.list)
          .filter(cmp => cmp !== 'app1')
          .map(cmp => {
            this.store.dispatch(unload({ elementRef: cmp }))
            this.list[cmp].payload = this.list[cmp].action;
          });
      }

    })

    this.$app2Ref = store.select('apps','app2','loaded');
    this.$app2Ref.subscribe(data => {
      this.stateApp2 = data;
      console.log(data);
      if (this.stateApp2) {
        this.list['app2'].action = this.stateApp1.initialized
          ? () => this.store.dispatch(reload({ elementRef: 'app2', parent: '#content' }))
          : () => this.store.dispatch(load({ elementRef: 'app2', parent: '#content' }))
        Object.keys(this.list)
          .filter(cmp => cmp !== 'app2')
          .map(cmp => {
            console.log(cmp)
            this.store.dispatch(unload({ elementRef: cmp }))
            this.list[cmp].payload = this.list[cmp].action;
          });

      }


    })
  }

  ngOnInit() {
  }

  loadComponent(ref) {
    console.log(ref);
    // this.list[ref].initialized = true;
    this.list[ref].payload();
    this.list[ref].payload = () => '';

    // Object.keys(this.list)
    //   .filter(cmp => cmp !== ref)
    //   .map(cmp => {
    //     this.store.dispatch(unload({ elementRef: cmp }))

    //     this.list[cmp].payload = this.list[cmp].initialized
    //       ?
    //       () => this.store.dispatch(reload({ elementRef: cmp, parent: '#content' }))
    //       :
    //       this.list[cmp].action;
    //   });

  }

}
