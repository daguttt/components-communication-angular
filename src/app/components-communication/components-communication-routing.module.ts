import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsCommunicationComponent } from './components-communication.component';
import { ChildParentComponent } from './pages/child-parent/child-parent.component';
import { GrandChildChildParentComponent } from './pages/grand-child-child-parent/grand-child-child-parent.component';
import { ParentChildGrandChildComponent } from './pages/parent-child-grand-child/parent-child-grand-child.component';
import { ParentChildComponent } from './pages/parent-child/parent-child.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsCommunicationComponent,
    children: [
      {
        path: 'parent-child',
        component: ParentChildComponent,
      },
      {
        path: 'child-parent',
        component: ChildParentComponent,
      },
      {
        path: 'parent-child-grand-child',
        component: ParentChildGrandChildComponent,
      },
      {
        path: 'grand-child-child-parent',
        component: GrandChildChildParentComponent,
      },
      {
        path: '**',
        redirectTo: 'parent-child',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsCommunicationModuleRouting {}
