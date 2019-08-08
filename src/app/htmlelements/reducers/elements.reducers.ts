import { createReducer, on } from '@ngrx/store';
import {unload, load,reload } from '../actions/elements.actions.factory';


//TODO : optimize registration of a new state that represents a new component
export const initialState =
{
  'header': {
    loaded: false,
    initialized:false,
    // state: 'unloaded',
    path: 'header/main.js',
    element: 'app-header'
  },
  'app1': {
    loaded: false,
    // state: 'unloaded',
    initialized:false,
    path: 'app1/main.js',
    element: 'app-one'
  },
  'app2': {
    loaded: false,
    initialized:false,
    // state: 'unloaded',
    path: 'app2/main.js',
    element: 'app-two'
  }
};

export const htmlElementsReducer = createReducer(initialState,
  on(load, (state, { elementRef,parent }) => {
  

    state[elementRef].loaded = true;
    const parentHtml = document.querySelector(parent);
   
   
    
    const script = document.createElement('script');
    script.id = `script-for-${state[elementRef].element}`;
    script.src = state[elementRef].path;
    parentHtml.appendChild(script);
    const element: HTMLElement = document.createElement( state[elementRef].element);
    parentHtml.appendChild(element);
    state[elementRef].initialized = true;
    return state;
  }),
  on(unload, (state, { elementRef }) => {

    state[elementRef].loaded = false;
    const element = document.querySelector(state[elementRef].element);
   try {
    element.remove();
   } catch (error) {
     
   }
    
    return state;
  }),
  on(reload,(state,{elementRef,parent})=>{
    state[elementRef].loaded = true;
    const parentHtml = document.querySelector(parent);
    const element: HTMLElement = document.createElement( state[elementRef].element);
    parentHtml.appendChild(element);
    return state;
  })
);