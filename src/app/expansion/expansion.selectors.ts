import { createSmartSelector } from '@smarttools/smart-ngrx';
import { selectInstanceEntities } from '../instance/instance.selectors';
import { featureName } from '../shared/shared.feature';
import { selectExpansionEntities } from './expansion-entities.selectors';


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
