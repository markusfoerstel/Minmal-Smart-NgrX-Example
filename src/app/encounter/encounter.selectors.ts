import { createSmartSelector, getTopChildRows } from "@smarttools/smart-ngrx";
import { Encounter } from "./encounter";
import { featureName } from "../tree-standard/tree-standard.feature";
import { Instance } from "../instance/instance";
import { selectInstanceEntities } from "../instance/instance.selectors";

// Top-Level Selector für Encounter
export const selectEncounterEntities = createSmartSelector<Encounter>(
  featureName, // Feature-Name (muss mit deiner Feature-Registrierung übereinstimmen)
  'encounters'  // Entity-Name (muss mit deiner Entity-Definition übereinstimmen)
);

// Parent-Child-Selector für Encounter → Instance
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

// Finaler Selector für die Tree-Komponente
export const selectEncounters = getTopChildRows<Encounter, Instance>(
  selectEncounterInstances, // Top-Level-Selector
  'instance'              // Feld im Encounter, das die Child-IDs enthält
);
