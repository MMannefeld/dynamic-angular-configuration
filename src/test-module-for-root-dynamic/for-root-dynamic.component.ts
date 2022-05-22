import { Component, Inject, OnInit } from '@angular/core';
import {
  APP_INSIGHTS_CONFIG,
  AppBootstrapConfig,
} from './test-for-root-dynamic.module';
import { BASE_PATH } from '../../build/openapi/contract-1';
import { DATA_APP_BOOTSTRAP } from '../app/app.module';

@Component({
  selector: 'app-for-root-dynamic',
  templateUrl: './for-root-dynamic.component.html',
  styleUrls: ['./for-root-dynamic.component.scss'],
})
export class ForRootDynamicComponent implements OnInit {
  envHeaderAppBootstrap: string;
  dataUrlAppBootstrap: string;
  baseUrlAppBootstrap: string;
  basePathAppInitializer: string;
  appInsightsConfigHeader: string;

  constructor(
    // only for demonstration
    @Inject(DATA_APP_BOOTSTRAP) private dataAppBootstrap: AppBootstrapConfig,
    @Inject(BASE_PATH) private basePath: string,
    // only for demonstration

    @Inject(APP_INSIGHTS_CONFIG)
    private appInsightsConfigHeaderFromAppModule: string
  ) {
    this.envHeaderAppBootstrap = dataAppBootstrap.envHeaderAppBootstrap;
    this.dataUrlAppBootstrap = dataAppBootstrap.dataUrlAppBootstrap;
    this.baseUrlAppBootstrap = dataAppBootstrap.baseUrlAppBootstrap;

    this.appInsightsConfigHeader = appInsightsConfigHeaderFromAppModule;

    this.basePathAppInitializer = basePath;
  }

  ngOnInit(): void {}
}
