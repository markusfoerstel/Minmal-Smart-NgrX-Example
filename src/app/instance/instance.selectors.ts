import { createSmartSelector, getTopChildRows } from "@smarttools/smart-ngrx";
import { Instance } from "./instance";
import { featureName } from "../shared/shared.feature";
import { selectEncounterEntities } from "../encounter/encounter.selectors";
import { selectExpansionWithInstances } from "../expansion/expansion.selectors";
import { Expansion } from "../expansion/expansion";


export const selectInstanceEntities = createSmartSelector<Instance>(
  featureName,
  'instances',
);

// export const selectInstances = getTopChildRows<Expansion, Instance>(selectExpansionWithInstances, 'instances');

// 2) Instance → Encounters
// export const selectInstanceWithEncounters = createSmartSelector(
//   selectInstanceEntities,
//   [{
//     childFeature: featureName,
//     childEntity:  'encounters',
//     parentField:  'encounters',
//     parentFeature: featureName,
//     parentEntity:  'instances',
//     childSelector: selectEncounterEntities,
//   }],
// );

// Flat instances
// export const selectInstancesForCurrentExpansion = getTopChildRows(
//   selectExpansionWithInstances,
//   'instances'
// );
