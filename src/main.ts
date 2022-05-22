import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule, DATA_APP_BOOTSTRAP } from './app/app.module';
import { environment } from './environments/environment';
import { AppBootstrapConfig } from './test-module-for-root-dynamic/test-for-root-dynamic.module';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));

const CONFIG_URL = './static-config/app-bootstrap.json';

fetch(CONFIG_URL)
  .then((res) => res.json())
  .then((config: AppBootstrapConfig) => {
    console.log(
      'FOR_ROOT_DYNAMIC_BOOTSTRAP - config: AppBootstrapConfig',
      config
    );
    if (environment.production) {
      enableProdMode();
    }

    platformBrowserDynamic([{ provide: DATA_APP_BOOTSTRAP, useValue: config }])
      .bootstrapModule(AppModule)
      .catch((err) => console.error(err));
  });
