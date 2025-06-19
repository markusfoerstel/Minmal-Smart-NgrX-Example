import { EncounterEntity } from "../encounter/encounter";
import { ExpansionEntity } from "../expansion/expansion";
import { InstanceEntity } from "../instance/instance";

export interface SharedState {
  expansions: ExpansionEntity;
  instances: InstanceEntity;
  encounters: EncounterEntity;
}

export const featureName = 'shared';
