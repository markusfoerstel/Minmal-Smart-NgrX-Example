import { SmartEntityDefinition } from '@smarttools/smart-ngrx';
import { Top } from './top.interface';
import { topEffectsServiceToken } from './top-effects.servie-token';


export const topDefinition: SmartEntityDefinition<Top> = {
  entityName: 'top',
  effectServiceToken: topEffectsServiceToken,
  isInitialRow: true,
  defaultRow: function defaultRowFunction(id) {
    return {
      id,
      expansions: [],
    };
  },
};