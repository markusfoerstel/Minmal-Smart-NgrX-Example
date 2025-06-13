import { createSmartSelector, getTopChildRows } from "@smarttools/smart-ngrx";
import { Instance } from "./instance";
import { featureName } from "../tree-standard/tree-standard.feature";


export const selectInstanceEntities = createSmartSelector<Instance>(
  featureName,
  'instances',
);

// export const selectInstances = createSmartSelector(selectInstanceEntities, [
//   {
//     childFeature: featureName,
//     childEntity: 'locations',
//     parentField: 'locations',
//     parentFeature: featureName,
//     parentEntity: 'top',
//     childSelector: selectLocationsDepartments,
//   },
// ]);
