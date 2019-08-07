
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {httpInterceptorProviders} from './shared/interceptors/http-interceptors'
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {htmlElementsReducer} from './htmlelements/reducers/elements.reducers';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      apps:htmlElementsReducer
    })
  ],
  //DIRETIVA NECESSARIA
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {



}
