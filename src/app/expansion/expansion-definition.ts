import { SmartEntityDefinition } from '@smarttools/smart-ngrx';
import { Expansion } from './expansion';
import { expansionEffectsServiceToken } from './encounter-effects.service-token';

export const expansionsDefinition: SmartEntityDefinition<Expansion> = {
  entityName: 'expansions',
  effectServiceToken: expansionEffectsServiceToken,
  // markiert, dass immer genau eine Row automatisch "geladen" (initialisiert) wird
  isInitialRow: true,
  defaultRow: id => ({
    id,
    name: '',
    order_index: 0,
    icon: '',
    short_name: '',
    url: '',
    // hier halten wir später per loadByIndexes die Child-IDs
    instances: [] as string[],
  }),
};
