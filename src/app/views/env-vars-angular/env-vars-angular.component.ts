import { Component, OnInit } from '@angular/core';
import {
  DataEnvVarsAngular,
  EnvVarsAngularService,
} from './env-vars-angular.service';

@Component({
  templateUrl: './env-vars-angular.component.html',
  styleUrls: ['./env-vars-angular.component.scss'],
})
export class EnvVarsAngularComponent implements OnInit {
  constructor(private envVarsAngularService: EnvVarsAngularService) {}

  headerFromEnv = process.env['NG_APP_ENV_HEADER'];
  dataUrlFromEnv = process.env['NG_APP_DATA_URL'];

  dataFromAPI: DataEnvVarsAngular | undefined;

  ngOnInit(): void {
    this.envVarsAngularService
      .getData_fromAngularEnvVars(this.dataUrlFromEnv)
      .subscribe((dataFromAPI: DataEnvVarsAngular) => {
        console.log(
          'ANGULAR_ENVIRONMENT_VARS - received Data from API',
          dataFromAPI
        );
        this.dataFromAPI = { ...dataFromAPI };
      });

    console.log('ANGULAR_ENVIRONMENT_VARS - process.env', process.env);
    console.log('ANGULAR_ENVIRONMENT_VARS - headerFromEnv', this.headerFromEnv);
    console.log(
      'ANGULAR_ENVIRONMENT_VARS - dataUrlFromEnv',
      this.dataUrlFromEnv
    );
  }
}
