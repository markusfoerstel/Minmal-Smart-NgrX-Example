import { createSmartSelector } from '@smarttools/smart-ngrx';
import { Top } from './top.interface';


export const selectTopEntities = createSmartSelector<Top>(
  'shared',
  'top',
);
