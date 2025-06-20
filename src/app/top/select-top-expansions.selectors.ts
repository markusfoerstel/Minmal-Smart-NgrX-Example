import { createSmartSelector } from '@smarttools/smart-ngrx';
import { featureName } from '../shared/shared.feature';
import { selectTopEntities } from './select-top-entities.selectors';
import { selectExpansionEntities } from '../expansion/expansion-entities.selectors';


export const selectTopExpansions = createSmartSelector(selectTopEntities, [
  {
    childFeature: featureName,
    childEntity: 'expansions',
    parentField: 'expansions',
    parentFeature: featureName,
    parentEntity: 'top',
    childSelector: selectExpansionEntities,
  },
]);