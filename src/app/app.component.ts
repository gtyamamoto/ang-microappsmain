import { Component, OnInit } from '@angular/core';
import { StateService } from './state.service'
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { initialize, load } from './htmlelements/actions/elements.actions.factory';
@Component({
  selector: 'shell-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shell';
  stateHeader: any;
  $headerRef: Observable<any>;
  constructor(private store: Store<{}>) {

    this.$headerRef = store.select('apps', 'header');
    this.$headerRef.subscribe((data) => {
      this.stateHeader = data;
    })
  }

  ngOnInit(): void {
    this.store.dispatch(load({ elementRef: 'header', parent: 'header' }));
  }
}
