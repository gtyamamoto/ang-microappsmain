import { Component } from '@angular/core';
import { StateService } from './state.service'
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { initialize } from './htmlelements/actions/elements.actions.factory';
@Component({
  selector: 'shell-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';
  stateHeader: any;
  $headerRef: Observable<any>;
  constructor(private stateservice: StateService, private store: Store<{}>) {

    this.$headerRef = store.select('apps', 'header');
    this.$headerRef.subscribe((data) => {
      this.stateHeader = data;
    })
  }
  load(name: string, parent: string = "#content"): void {
    if (this.stateHeader.loaded) { return; }
    const content = document.querySelector(parent);

    const script = document.createElement('script');
    script.src = this.stateHeader.path;
    script.onerror = () => console.error(`error loading ${this.stateHeader.path}`);
    content.appendChild(script);

    const element: HTMLElement = document.createElement(this.stateHeader.element);
    element.setAttribute('state', 'init');
    this.store.dispatch(initialize({ elementRef: 'header' }));
    content.appendChild(element);

    this.stateservice.registerApp(element);

  }

  ngOnInit(): void {
    this.load('header', 'header');


  }
}
