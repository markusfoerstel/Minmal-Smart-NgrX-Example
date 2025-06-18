import { EntityState } from '@ngrx/entity';
import { SmartNgRXRowBase } from '@smarttools/smart-ngrx';
import { Instance } from '../instance/instance';


export interface Expansion extends SmartNgRXRowBase {
    id: string;
    name: string;
    order_index: number;
    icon: string;
    short_name: string;
    url: string;

    instances: Instance[] | string[];
}

export type ExpansionEntity = EntityState<SmartNgRXRowBase & Expansion>;
