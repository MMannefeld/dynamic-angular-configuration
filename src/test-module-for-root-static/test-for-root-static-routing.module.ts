import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForRootStaticComponent } from './for-root-static.component';

const routes: Routes = [
  {
    path: '',
    component: ForRootStaticComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class TestForRootStaticRoutingModule {}
