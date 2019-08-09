import { createReducer, on } from '@ngrx/store';
import { unload, load, loadsingle } from '../actions/elements.actions.factory';
import {removeElementFromDOM,addElementOnParentDOM,addScriptOnParentDOM} from '../handlers'

//TODO : optimize registration of a new state that represents a new component
export const initialState =
{
  'header': {
    loaded: false,
    initialized: false,
    // state: 'unloaded',
    path: 'header/main.js',
    elementDOM: null,
    elementRef: 'app-header'
  },
  'app1': {
    loaded: false,
    // state: 'unloaded',
    initialized: false,
    path: 'app1/main.js',
    elementRef: 'app-one',
    elementDOM: null
  },
  'app2': {
    loaded: false,
    initialized: false,
    // state: 'unloaded',
    path: 'app2/main.js',
    elementRef: 'app-two',
    elementDOM: null
  }
};

export const htmlElementsReducer = createReducer(initialState,
  on(load, (state, { elementRef, parent }) => {
    const contextLoadScript = state[elementRef].initialized ? ()=>{} : ()=>addScriptOnParentDOM(state[elementRef].path,parent);
    const contextLoadComponent = state[elementRef].loaded ? ()=>{} :()=>addElementOnParentDOM(state[elementRef].elementRef,parent)
    state[elementRef].loaded = true;
    state[elementRef].initialized = true;
    contextLoadScript();
    state[elementRef].elementDOM = contextLoadComponent();
    return state;
  }),
  on(unload, (state, { elementRef,parent='#content' }) => {
    const contextRemoveElement = !state[elementRef].loaded ? ()=>{} : ()=>removeElementFromDOM(state[elementRef].elementDOM,parent);
    state[elementRef].loaded = false;
    state[elementRef].elementDOM = null;
    contextRemoveElement();
    return state;
  }),
  on(loadsingle, (state, { elementRef,parent='#content' }) => {
    const contextLoadScript = state[elementRef].initialized ? ()=>{} : ()=>addScriptOnParentDOM(state[elementRef].path,parent);
    const contextLoadComponent = state[elementRef].loaded ? ()=>{} :()=>addElementOnParentDOM(state[elementRef].elementRef,parent)
    state[elementRef].loaded = true;
    state[elementRef].initialized = true;
    contextLoadScript();
    state[elementRef].elementDOM = contextLoadComponent();

    Object.keys(state)
    .filter(key=>key!==elementRef&&state[key].loaded)
    .map(stateElm=>{
     try {
      removeElementFromDOM(state[stateElm].elementDOM,parent);
      state[stateElm].loaded = false;
      state[stateElm].elementDOM = null;
     } catch (error) {
       
     }
    
    })
    return state;
  }),
);