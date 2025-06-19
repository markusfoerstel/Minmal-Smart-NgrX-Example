import { EntityState } from '@ngrx/entity';
import { SmartNgRXRowBase } from '@smarttools/smart-ngrx';
import { Instance } from '../instance/instance';


export interface Encounter extends SmartNgRXRowBase {
    id: string;
    encounter_id: number;
    name: string;
    order_index: number;
    icon: string;
    short_name: string;
    url: string;
}

export type EncounterEntity = EntityState<SmartNgRXRowBase & Encounter>;
