import { SmartEntityDefinition } from '@smarttools/smart-ngrx';

import { Encounter } from './encounter';
import { encounterEffectsServiceToken } from './encounter-effects.service-token';


export const encounterDefinition: SmartEntityDefinition<Encounter> = {
  entityName: 'encounters',
  effectServiceToken: encounterEffectsServiceToken,
  isInitialRow: true,
  defaultRow: (id) => ({
    id,
    encounter_id: 0,
    instance: 0,
    name: '',
    order_index: 0,
    icon: '',
    short_name: '',
    url: '',
    children: [],
  }),
};
