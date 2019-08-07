import { createReducer, on } from '@ngrx/store';
import { initialize, unload, load } from '../actions/elements.actions.factory';
export const initialState =
{
  'header': {
    loaded: false,
    // state: 'unloaded',
    path: 'header/main.js',
    element: 'app-header'
  },
  'app1': {
    loaded: false,
    // state: 'unloaded',
    path: 'app1/main.js',
    element: 'app-one'
  }
};

export const htmlElementsReducer = createReducer(initialState,
  // on(initialize, (state, { elementRef }) => {
  //   state[elementRef].loaded = false;
  //   state[elementRef].state = 'init';
  //   state[elementRef]
  //   return state;
  // }),
  on(load, (state, { elementRef,parent }) => {
    state[elementRef].loaded = true;
   // state[elementRef].state = 'loaded';

    return state;
  }),
  on(unload, (state, { elementRef,parent }) => {
    state[elementRef].loaded = false;
    //state[elementRef].state = 'unloaded';
    return state;
  }),
);