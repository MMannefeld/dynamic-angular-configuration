import { APP_INITIALIZER, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialBarrelModule } from './shared/material-barrel.module';
import { HttpClientModule } from '@angular/common/http';
import {
  AppInitializerConfig,
  AppConfigService,
} from './config/app-config.service';
import { Observable } from 'rxjs';
import { BASE_PATH } from '../../build/openapi/contract-1';
import {
  ConfigClass,
  TestForRootStaticModule,
} from '../test-module-for-root-static/test-for-root-static.module';
import {
  APP_INSIGHTS_CONFIG,
  AppBootstrapConfig,
  TestForRootDynamicModule,
} from '../test-module-for-root-dynamic/test-for-root-dynamic.module';
import { EnvironmentTsComponent } from './views/environment-ts/environment-ts.component';
import { CommonModule } from '@angular/common';
import { EnvVarsAngularComponent } from './views/env-vars-angular/env-vars-angular.component';
import { OpenapiContractComponent } from './views/openapi-contract/openapi-contract.component';
import { AppInitializerComponent } from './views/app-initializer/app-initializer.component';

export const DATA_APP_BOOTSTRAP = new InjectionToken<AppBootstrapConfig>(
  'DATA_APP_BOOTSTRAP'
);

function appInitializerFactory(
  appConfigService: AppConfigService
): () => Observable<AppInitializerConfig> {
  console.log('APP_INITIALIZER - call Factory Function');
  return () => appConfigService.loadConfig();
}

function basePathFactory(appConfigService: AppConfigService): string {
  console.log('APP_INITIALIZER_INJECTION_TOKEN - call Factory Function');
  return appConfigService.getBaseUrl();
}

@NgModule({
  declarations: [
    AppComponent,
    EnvironmentTsComponent,
    EnvVarsAngularComponent,
    OpenapiContractComponent,
    AppInitializerComponent,
  ],
  imports: [
    TestForRootStaticModule.forRoot({
      value: 'pass static value to forRoot() method',
    } as ConfigClass),
    TestForRootDynamicModule,
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialBarrelModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [AppConfigService],
      multi: true,
    },
    {
      provide: BASE_PATH,
      useFactory: basePathFactory,
      deps: [AppConfigService],
    },
    {
      provide: APP_INSIGHTS_CONFIG,
      useFactory: (config: AppBootstrapConfig) => config.envHeaderAppBootstrap,
      deps: [DATA_APP_BOOTSTRAP],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
