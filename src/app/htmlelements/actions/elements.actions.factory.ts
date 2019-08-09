import { EventDOMInterface } from './../handlers/events.interface';
import { createAction, props } from '@ngrx/store';

//TODO: autoadd an microapp to the factory




export const load = createAction('LOAD_CUSTOM_ELEMENT', props<{ elementRef: string, parent: string }>());
export const reload = createAction('RELOAD_CUSTOM_ELEMENT', props<{ elementRef: string, parent: string }>());
export const loadsingle = createAction('LOAD_SINGLE_AND_REMOVE_OTHERS_CUSTOM_ELEMENT', props<{ elementRef: string, parent: string }>());
export const destroy = createAction('DESTROY_CUSTOM_ELEMENT', props<{ elementRef: string, parent: string }>());
export const loadWithEvents = createAction('LOAD_WITH_EVENTS_CUSTOM_ELEMENT', props<{ elementRef: string, parent: string, events: Array<EventDOMInterface> }>());
export const unload = createAction('UNLOAD_CUSTOM_ELEMENT', props<{ elementRef: string, parent: string }>());
