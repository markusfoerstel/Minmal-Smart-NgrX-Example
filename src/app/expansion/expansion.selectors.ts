import { createSmartSelector, getTopChildRows } from '@smarttools/smart-ngrx';
import { selectInstanceEntities } from '../instance/instance.selectors';
import { Expansion } from './expansion';
import { featureName } from '../shared/shared.feature';

export const selectExpansionEntities = createSmartSelector<Expansion>(featureName, 'expansions');

export const selectExpansionWithInstances = createSmartSelector(
  selectExpansionEntities,
  [
    {
      childFeature: featureName,
      childEntity: 'instances',
      parentField: 'instances',
      parentFeature: featureName,
      parentEntity: 'expansions',
      childSelector: selectInstanceEntities,
    },
  ]
);

export const selectInstancesForCurrentExpansion = getTopChildRows(
  selectExpansionWithInstances,
  'instances'
);