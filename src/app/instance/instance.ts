import { EntityState } from '@ngrx/entity';
import { SmartNgRXRowBase } from '@smarttools/smart-ngrx';

export interface Instance extends SmartNgRXRowBase {
    id: string;
    expansion: number;
    name: string;
    map_id: number;
    instance_type: string;
    order_index: number;
    tile: string;
    icon: string;
    short_name: string;
    total_bosses: number;
}

export type InstanceEntity = EntityState<SmartNgRXRowBase & Instance>;
