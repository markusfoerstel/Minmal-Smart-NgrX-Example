import { Routes } from '@angular/router';
import { provideSmartFeatureClassicEntities } from '@smarttools/smart-ngrx';
// import { encounterDefinition } from './encounter/encounter-definition';
import { instanceDefinition } from './instance/instance-definition';
import { expansionsDefinition } from './expansion/expansion-definition';
import { topDefinition } from './top/top-definition';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async function test(): Promise<any> {
      return (await import('./test/test.component')).TestComponent;
    },
    providers: [
      provideSmartFeatureClassicEntities('shared', [
        topDefinition,
        expansionsDefinition,
        instanceDefinition,
        // encounterDefinition,
      ]),
    ],
  },
];
