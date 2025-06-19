import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SharedState, featureName } from "./shared.feature";

export const selectSharedState = createFeatureSelector<SharedState>(featureName);

export const selectEncounterEntities = createSelector(
  selectSharedState,
  function selectEncounterEntitiesFunction(state) {
    return state.encounters;
  }
);
