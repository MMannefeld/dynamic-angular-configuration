import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForRootDynamicComponent } from './for-root-dynamic.component';

const routes: Routes = [
  {
    path: '',
    component: ForRootDynamicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class TestForRootDynamicRoutingModule {}
