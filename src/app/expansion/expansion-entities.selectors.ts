import { createSmartSelector } from '@smarttools/smart-ngrx';
import { Expansion } from './expansion';
import { featureName } from '../shared/shared.feature';


export const selectExpansionEntities = createSmartSelector<Expansion>(featureName, 'expansions');
