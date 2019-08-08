import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'header';
  @Output() showApp1 = new EventEmitter<any>();
  @Output() showApp2 = new EventEmitter<any>();
  constructor(){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  onRouteToApp1(){
    this.showApp1.emit('showapp1')
  }

  onRouteToApp2(){
    this.showApp2.emit('showapp2')
  }



}
