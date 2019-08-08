import { createAction, props } from '@ngrx/store';

//TODO: autoadd an microapp to the factory




export const load = createAction('[HtmlElement Component] Load', props<{ elementRef: string, parent: string }>());
export const reload = createAction('[HtmlElement Component] Reload', props<{ elementRef: string, parent: string }>());
export const unload = createAction('[HtmlElement Component] Unload', props<{ elementRef: string }>());
