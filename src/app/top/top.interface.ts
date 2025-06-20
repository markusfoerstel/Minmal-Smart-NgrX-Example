import { SmartNgRXRowBase } from '@smarttools/smart-ngrx';

import { Expansion } from '../expansion/expansion';

export interface Top extends SmartNgRXRowBase {
  id: string;
  expansions: Expansion[] | string[];
}