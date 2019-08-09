
import { EventDOMInterface } from './events.interface'
export const removeElementFromDOM = (element: HTMLElement,
    parentQuery: string) => {
    const parentHTML: HTMLElement = document.querySelector(parentQuery);
    parentHTML.removeChild(element);
}


export const addHandlerToElementFromDOM = (element: HTMLElement,
    events : Array<EventDOMInterface>) => {
    events.map(event=>{
        element.addEventListener(event.name,event.func)
    })
}


export const addElementOnParentDOM =
    (elementQuery: string,
        parentQuery: string): HTMLElement => {

        const parentHTML: HTMLElement = document.querySelector(parentQuery);
        const elementDOM: HTMLElement = document.createElement(elementQuery);
        parentHTML.appendChild(elementDOM);
        return elementDOM;

    }

export const addScriptOnParentDOM =
    (scriptPath: string,
        parentQuery: string) => {

        const parentHtml = document.querySelector(parentQuery);
        const script = document.createElement('script');
        script.src = scriptPath;
        parentHtml.appendChild(script);

    }