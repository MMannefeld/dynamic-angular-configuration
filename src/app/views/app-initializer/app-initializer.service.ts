import { Injectable } from '@angular/core';
import { Data1, Data1Service } from '../../../../build/openapi/contract-1';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppInitializerService {
  constructor(private dataService: Data1Service) {}

  getData_fromAppInitializer(): Observable<Data1> {
    return this.dataService.getAppInitializer();
  }
}
