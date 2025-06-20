import { SmartEntityDefinition } from '@smarttools/smart-ngrx';
import { Expansion } from './expansion';
import { expansionEffectsServiceToken } from './expansion-effects.service-token';

export const expansionsDefinition: SmartEntityDefinition<Expansion> = {
  entityName: 'expansions',
  effectServiceToken: expansionEffectsServiceToken,
  defaultRow: id => ({
    id,
    name: '',
    order_index: 0,
    icon: '',
    short_name: '',
    url: '',

    instances: [],
  }),
};
