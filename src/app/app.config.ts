import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore, StoreModule } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { encounterEffectsServiceToken } from './encounter/encounter-effects.service-token';
import { EncounterEffectsService } from './encounter/encountereffects.service';
import { provideSmartNgRX } from '@smarttools/smart-ngrx';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { instanceEffectsServiceToken } from './instance/instance-effects.service-token';
import { InstanceEffectsService } from './instance/instanceeffects.service';
import { expansionEffectsServiceToken } from './expansion/encounter-effects.service-token';
import { ExpansionEffectsService } from './expansion/expansioneffects.service';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection(),
    { provide: expansionEffectsServiceToken, useClass: ExpansionEffectsService },
    { provide: instanceEffectsServiceToken, useClass: InstanceEffectsService },
    { provide: encounterEffectsServiceToken, useClass: EncounterEffectsService },
    provideHttpClient(),
    importProvidersFrom(
      StoreModule.forRoot({}),
    ),
    provideStore(),
    provideEffects(),
    provideSmartNgRX({}),
    provideRouter(routes),
    provideStoreDevtools({
        maxAge: 25, // Retains last 25 states
        logOnly: false, // Restrict extension to log-only mode
        autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        trace: true, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
        traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
  ]
};
