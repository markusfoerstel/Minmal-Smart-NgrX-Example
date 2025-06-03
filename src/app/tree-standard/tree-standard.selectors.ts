import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TreeStandardState, featureName } from "./tree-standard.feature";

export const selectTreeStandardState = createFeatureSelector<TreeStandardState>(featureName);

export const selectEncounterEntities = createSelector(
  selectTreeStandardState,
  function selectEncounterEntitiesFunction(state) {
    return state.encounters;
  }
);
