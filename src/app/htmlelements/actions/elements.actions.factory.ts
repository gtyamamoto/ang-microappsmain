import { createAction, props } from '@ngrx/store';




export const initialize = createAction('[HtmlElement Component] Initialize', props<{ elementRef: string }>());
export const load = createAction('[HtmlElement Component] Load', props<{ elementRef: string, parent: string }>());
export const unload = createAction('[HtmlElement Component] Unload', props<{ elementRef: string }>());