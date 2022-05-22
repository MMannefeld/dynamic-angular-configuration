import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface DataEnvVarsAngular {
  title: string;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class EnvVarsAngularService {
  constructor(private httpClient: HttpClient) {}

  getData_fromAngularEnvVars(
    dataUrlFromEnv: string
  ): Observable<DataEnvVarsAngular> {
    return this.httpClient.get<DataEnvVarsAngular>(dataUrlFromEnv);
  }
}
