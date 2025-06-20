import { getTopChildRows } from '@smarttools/smart-ngrx';
import { Expansion } from './expansion';
import { Top } from '../top/top.interface';
import { selectTopExpansions } from '../top/select-top-expansions.selectors';


export const selectExpansions = getTopChildRows<Top, Expansion>(selectTopExpansions, 'expansions');
