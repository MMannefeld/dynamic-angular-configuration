import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnvironmentTsComponent } from './views/environment-ts/environment-ts.component';
import { EnvVarsAngularComponent } from './views/env-vars-angular/env-vars-angular.component';
import { OpenapiContractComponent } from './views/openapi-contract/openapi-contract.component';
import { AppInitializerComponent } from './views/app-initializer/app-initializer.component';

const routes: Routes = [
  {
    path: 'environment-ts',
    component: EnvironmentTsComponent,
  },
  {
    path: 'env-vars-angular',
    component: EnvVarsAngularComponent,
  },
  {
    path: 'openapi-contract',
    component: OpenapiContractComponent,
  },
  {
    path: 'app-initializer',
    component: AppInitializerComponent,
  },
  {
    path: 'for-root-static',
    loadChildren: () =>
      import('../test-module-for-root-static/test-for-root-static.module').then(
        (m) => m.TestForRootStaticModule
      ),
  },
  {
    path: 'for-root-dynamic',
    loadChildren: () =>
      import(
        '../test-module-for-root-dynamic/test-for-root-dynamic.module'
      ).then((m) => m.TestForRootDynamicModule),
  },
  { path: '', redirectTo: 'environment-ts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
