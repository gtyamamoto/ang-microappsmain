import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { StateService } from './state.service'
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { load,unload,reload } from './htmlelements/actions/elements.actions.factory';
@Component({
  selector: 'shell-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shell';
  stateApp1: any;
  stateApp2: any;
  $app1Ref: Observable<any>;
  $app2Ref: Observable<any>;
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
  stateHeader: any;
  $headerRef: Observable<any>;
  constructor(private store: Store<{}>) {

    this.$headerRef = store.select('apps', 'header','loaded');
    this.$headerRef.subscribe((data) => {

      this.stateHeader = data;
      if( this.stateHeader){
        document.querySelector('app-header').addEventListener('showapp1', () => {
          this.list.app1.payload();
          this.list.app1.payload = () => '';
        })
        
      document.querySelector('app-header').addEventListener('showapp2', () => {
        this.list.app2.payload();
        this.list.app2.payload = () => '';
      })
      }
     

    })


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

  ngOnInit(): void {
    this.store.dispatch(load({ elementRef: 'header', parent: 'header' }))
      ;
  }
}
