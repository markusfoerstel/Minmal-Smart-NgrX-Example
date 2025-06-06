import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { encounterEffectsServiceToken } from './encounter/encounter-effects.service-token';
import { EncounterEffectsService } from './encounter/encountereffects.service';
import { provideSmartNgRX } from '@smarttools/smart-ngrx';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection(), 
    {
      provide: encounterEffectsServiceToken,
      useClass: EncounterEffectsService,
    },
    provideHttpClient(),
    provideStore(),
    provideEffects(),
    provideSmartNgRX({}),
    provideRouter(routes),
  ]
};
