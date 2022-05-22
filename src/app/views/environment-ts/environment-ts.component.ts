import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import {
  DataEnvironmentTs,
  EnvironmentTsService,
} from './environment-ts.service';

@Component({
  selector: 'app-environment-ts',
  templateUrl: './environment-ts.component.html',
  styleUrls: ['./environment-ts.component.scss'],
})
export class EnvironmentTsComponent implements OnInit {
  constructor(private environmentService: EnvironmentTsService) {}

  envHeader: string | undefined;
  dataUrl: string | undefined;

  dataFromAPI: DataEnvironmentTs | undefined;

  ngOnInit(): void {
    this.envHeader = environment.envHeader;
    this.dataUrl = environment.dataUrl;

    this.environmentService
      .getData_fromEnvironmentTsUrl(this.dataUrl)
      .subscribe((dataFromAPI: DataEnvironmentTs) => {
        console.log('ENVIRONMENT_TS - received Data from API', dataFromAPI);
        this.dataFromAPI = { ...dataFromAPI };
      });

    console.log('ENVIRONMENT_TS - envHeader', this.envHeader);
    console.log('ENVIRONMENT_TS - dataUrl', this.dataUrl);
  }
}
