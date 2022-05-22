import { Injectable } from '@angular/core';
import { ConfigClass } from './test-for-root-static.module';

@Injectable({
  providedIn: 'root',
})
export class ForRootStaticService {
  dataFromParentModule = '';
  constructor(private configClass: ConfigClass) {
    this.dataFromParentModule = configClass.value;
    console.log(
      'FOR_ROOT_STATIC_MODULE - received dataFromParentModule',
      this.dataFromParentModule
    );
  }

  getDataFromParentModule(): string {
    return this.dataFromParentModule;
  }
}
