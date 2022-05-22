import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface DataEnvironmentTs {
  title: string;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class EnvironmentTsService {
  constructor(private httpClient: HttpClient) {}

  getData_fromEnvironmentTsUrl(
    dataUrlFromEnvironmentTs: string
  ): Observable<DataEnvironmentTs> {
    return this.httpClient.get<DataEnvironmentTs>(dataUrlFromEnvironmentTs);
  }
}
