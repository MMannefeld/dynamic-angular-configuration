import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForRootDynamicComponent } from './for-root-dynamic.component';
import { TestForRootDynamicRoutingModule } from './test-for-root-dynamic-routing.module';

export interface AppBootstrapConfig {
  envHeaderAppBootstrap: string;
  dataUrlAppBootstrap: string;
  baseUrlAppBootstrap: string;
}

export const APP_INSIGHTS_CONFIG = new InjectionToken<string>(
  'APP_INSIGHTS_CONFIG'
);

@NgModule({
  declarations: [ForRootDynamicComponent],
  imports: [CommonModule, TestForRootDynamicRoutingModule],
  exports: [ForRootDynamicComponent],
})
export class TestForRootDynamicModule {}
