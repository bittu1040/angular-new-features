import { APP_INITIALIZER, ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { InitialService } from './services/initial.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { firstValueFrom, tap } from 'rxjs';

export function initializeApp1(initialService: InitialService) {
  return (): Promise<any> => {
    console.log("initialzation started 1")
    return initialService.initialize().toPromise().then(() => {
      console.log("initialization completed 1")
    })
  }
}

export function initializeApp2() {
  const http = inject(HttpClient);
  console.log("initialzation started 2")
  return firstValueFrom(http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(tap(data => {
    console.log(data);
    console.log("initialzation completed 2")
  })));
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeApp1,
    //   deps: [InitialService],
    //   multi: true
    // },
    // {
    //   provide: APP_INITIALIZER,
    //   useValue: initializeApp2,
    //   multi: true,
    // },

    provideAppInitializer(() => {
      const initialService = inject(InitialService);
      return initializeApp1(initialService)();
    }),
    provideAppInitializer(()=>initializeApp2())
  ]
};
