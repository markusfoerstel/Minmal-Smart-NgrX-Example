import { SmartEntityDefinition } from '@smarttools/smart-ngrx';

import { Instance } from './instance';
import { instanceEffectsServiceToken } from './instance-effects.service-token';

export const instanceDefinition: SmartEntityDefinition<Instance> = {
  entityName: 'instances',
  effectServiceToken: instanceEffectsServiceToken,
  defaultRow: (id) => ({
    id,
    expansion: 0,
    name: '',
    map_id: 0,
    instance_type: '',
    order_index: 0,
    tile: '',
    icon: '',
    short_name: '',
    total_bosses: 0,
    encounters: [] as string[],
  }),
};
