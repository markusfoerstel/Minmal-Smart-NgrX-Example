import { Routes } from '@angular/router';
import { provideSmartFeatureClassicEntities } from '@smarttools/smart-ngrx';
import { encounterDefinition } from './encounter/encounter-definition';
import { instanceDefinition } from './instance/instance-definition';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async function test(): Promise<any> {
      return (await import('./test/test.component')).TestComponent;
    },
    providers: [
      provideSmartFeatureClassicEntities('tree-standard', [
        encounterDefinition,
        instanceDefinition
      ]),
    ],
  },
];
