import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/state.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { initialize,load } from 'src/app/htmlelements/actions/elements.actions.factory';

@Component({
  selector: 'shell-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  stateApp1: any;
  $app1Ref : Observable<any>;

  constructor(private stateService: StateService,private store : Store<{}>) {
    this.$app1Ref = store.select('apps','app1');
    this.$app1Ref.subscribe(data=>{
      this.stateApp1 = data;
    })
   }

  ngOnInit() {
  }
  
  load(name: string, parent: string = "#content"): void {

    if (this.stateApp1.loaded)  { return; }
    const content = document.querySelector(parent);

    const script = document.createElement('script');
    script.src = this.stateApp1.path;
    script.onerror = () => console.error(`error loading ${this.stateApp1.path}`);
    content.appendChild(script);

    const element: HTMLElement = document.createElement(this.stateApp1.element);
    element.setAttribute('state', 'init');
    content.appendChild(element);
    this.store.dispatch(initialize({ elementRef: 'app1' }));
    this.stateService.registerApp(element);

  }
  loadRecharge() {
    this.load('app1');
    this.store.dispatch(load({ elementRef: 'app1' }));
    //this.config['app1'].loaded = true;

  }

}
