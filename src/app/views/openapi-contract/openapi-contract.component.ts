import { Component, OnInit } from '@angular/core';
import { Data1 } from '../../../../build/openapi/contract-1';
import { OpenapiContractService } from './openapi-contract.service';

@Component({
  templateUrl: './openapi-contract.component.html',
  styleUrls: ['./openapi-contract.component.scss'],
})
export class OpenapiContractComponent implements OnInit {
  constructor(private openApiContractService: OpenapiContractService) {}

  dataFromAPI: Data1 | undefined;

  ngOnInit(): void {
    this.openApiContractService
      .getData_fromOpenApiContract()
      .subscribe((dataFromAPI: Data1) => {
        console.log(
          'ANGULAR_OPENAPI_CONTRACT - received Data from API',
          dataFromAPI
        );
        this.dataFromAPI = { ...dataFromAPI };

        console.log(
          'ANGULAR_OPENAPI_CONTRACT - title',
          this.dataFromAPI?.title
        );
        console.log('ANGULAR_OPENAPI_CONTRACT - id', this.dataFromAPI?.id);
      });
  }
}
