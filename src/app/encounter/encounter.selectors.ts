import { createSmartSelector } from "@smarttools/smart-ngrx";
import { Encounter } from "./encounter";
import { featureName } from "../shared/shared.feature";


export const selectEncounterEntities = createSmartSelector<Encounter>(
  featureName,
  'encounters'
);
