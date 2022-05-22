import { Component, OnInit } from '@angular/core';
import { Data1 } from '../../../../build/openapi/contract-1';
import { AppInitializerService } from './app-initializer.service';
import { AppConfigService } from '../../config/app-config.service';

@Component({
  templateUrl: './app-initializer.component.html',
  styleUrls: ['./app-initializer.component.scss'],
})
export class AppInitializerComponent implements OnInit {
  constructor(
    private appInitializerService: AppInitializerService,
    private appConfigService: AppConfigService
  ) {}

  envHeaderAppInitializer: string | undefined;
  baseUrlAppInitializer: string | undefined;

  dataFromAPI: Data1 | undefined;

  ngOnInit(): void {
    this.envHeaderAppInitializer = this.appConfigService.getHeader();
    this.baseUrlAppInitializer = this.appConfigService.getBaseUrl();

    console.log(
      'ANGULAR_APP_INITIALIZER - config - envHeaderAppInitializer',
      this.envHeaderAppInitializer
    );
    console.log(
      'ANGULAR_APP_INITIALIZER - config - baseUrlAppInitializer',
      this.baseUrlAppInitializer
    );

    this.appInitializerService
      .getData_fromAppInitializer()
      .subscribe((dataFromAPI: Data1) => {
        console.log(
          'ANGULAR_APP_INITIALIZER - received Data from API',
          dataFromAPI
        );
        this.dataFromAPI = { ...dataFromAPI };

        console.log(
          'ANGULAR_APP_INITIALIZER - api - title',
          this.dataFromAPI?.title
        );
        console.log('ANGULAR_APP_INITIALIZER - api - id', this.dataFromAPI?.id);
      });
  }
}
