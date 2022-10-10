import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'communication',
    loadChildren: () =>
      import('./components-communication/components-communication.module').then(
        (m) => m.ComponentsCommunicationModule
      ),
  },
  {
    path: '**',
    redirectTo: 'communication',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
