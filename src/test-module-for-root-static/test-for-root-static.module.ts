import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForRootStaticComponent } from './for-root-static.component';
import { TestForRootStaticRoutingModule } from './test-for-root-static-routing.module';

export class ConfigClass {
  value: string = '';
}

@NgModule({
  declarations: [ForRootStaticComponent],
  imports: [CommonModule, TestForRootStaticRoutingModule],
  exports: [ForRootStaticComponent],
})
export class TestForRootStaticModule {
  static forRoot(
    configClass: ConfigClass
  ): ModuleWithProviders<TestForRootStaticModule> {
    console.log('FOR_ROOT_STATIC_MODULE - config', configClass.value);
    return {
      ngModule: TestForRootStaticModule,
      providers: [{ provide: ConfigClass, useValue: configClass }],
    };
  }
}
