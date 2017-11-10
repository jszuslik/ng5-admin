import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScriptsComponent} from './scripts.component';
import {ScriptListComponent} from './script-list/script-list.component';

const routes: Routes = [{
    path: '',
    component: ScriptsComponent,
    children: [{
        path: 'script-list',
        component: ScriptListComponent,
    }],
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ScriptsRoutingModule {

}

export const routedComponents = [
    ScriptsComponent,
    ScriptListComponent
];
