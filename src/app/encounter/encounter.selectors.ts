import { createSmartSelector } from "@smarttools/smart-ngrx";
import { Encounter } from "./encounter";


export const selectEncounterEntities = createSmartSelector<Encounter>(
  'tree-standard',
  'encounter',
);