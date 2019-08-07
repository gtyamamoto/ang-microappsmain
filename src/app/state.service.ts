import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StateService {

    constructor() { }

    private state$ = new Subject();
    private apps: HTMLElement[] = [];

    public registerApp(app: HTMLElement) {
        this.apps.push(app);
    }

    public setStateAll(state: string) {
        for (let app of this.apps) {
            app.setAttribute('state', state);
        }
    }

    public setStateByAppId(state: string, idOrClass: string) {
        let findAppsByElement: HTMLElement[] = this.apps.filter(app => app.id === idOrClass || app.classList.contains(idOrClass));
        if (findAppsByElement && findAppsByElement.length) {
            findAppsByElement = findAppsByElement.map(app => { 
                app.setAttribute('state', state); return app; });
            this.apps = [...this.apps.filter(app => app.id !== idOrClass && !app.classList.contains(idOrClass)), ...findAppsByElement]
        }
    }


}
