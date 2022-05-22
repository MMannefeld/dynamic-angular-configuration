import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';

const CONFIG_URL = './static-config/app-initializer.json';

const headers = {
  'Cache-Control':
    'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
};

export interface AppInitializerConfig {
  envHeaderAppInitializer: string;
  dataUrlAppInitializer: string;
  baseUrlAppInitializer: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  constructor(private http: HttpClient) {}

  appConfig: AppInitializerConfig | undefined = undefined;

  loadConfig(): Observable<AppInitializerConfig> {
    return this.http
      .get<AppInitializerConfig>(CONFIG_URL, {
        headers: new HttpHeaders(headers),
        responseType: 'json',
        observe: 'response',
      })
      .pipe(
        switchMap(
          (
            config: HttpResponse<AppInitializerConfig>
          ): Observable<AppInitializerConfig> => {
            if (!config?.body) {
              throw new Error('test');
            }
            this.appConfig = config.body;
            console.log('APP_INITIALIZER - loadConfig', this.appConfig);
            return of(this.appConfig);
          }
        )
      );
  }

  getHeader(): string {
    return this.appConfig?.envHeaderAppInitializer ?? '';
  }

  getDataUrl(): string {
    return this.appConfig?.dataUrlAppInitializer ?? '';
  }

  getBaseUrl(): string {
    console.log(
      'APP_INITIALIZER_INJECTION_TOKEN - load baseUrl',
      this.appConfig?.baseUrlAppInitializer ?? ''
    );
    return this.appConfig?.baseUrlAppInitializer ?? '';
  }
}
