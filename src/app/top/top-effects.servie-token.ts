import { InjectionToken } from '@angular/core';
import { TopEffectsService } from './top.service';


export const topEffectsServiceToken = new InjectionToken<TopEffectsService>(
  'TopEffectsService',
);