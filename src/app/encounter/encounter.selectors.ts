import { createSmartSelector, getTopChildRows } from "@smarttools/smart-ngrx";
import { Encounter } from "./encounter";
import { featureName } from "../shared/shared.feature";
import { Instance } from "../instance/instance";
import { selectInstanceEntities } from "../instance/instance.selectors";


export const selectEncounterEntities = createSmartSelector<Encounter>(
  featureName,
  'encounters'
);

export const selectEncounterInstances = createSmartSelector(selectEncounterEntities, [
  {
    childFeature: featureName,
    childEntity: 'instances',
    parentField: 'instance',
    parentFeature: featureName,
    parentEntity: 'encounters',
    childSelector: selectInstanceEntities,
  },
]);

export const selectEncounters = getTopChildRows<Encounter, Instance>(
  selectEncounterInstances,
  'instance'
);
