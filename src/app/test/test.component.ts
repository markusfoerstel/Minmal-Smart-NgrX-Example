import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { selectEncounters } from '../encounter/encounter.selectors';
import { Instance } from '../instance/instance';
import { selectInstancesForCurrentExpansion } from '../instance/instance.selectors';
import { selectEncountersForCurrentInstance, selectExpansionEntities } from '../expansion/expansion.selectors';
import { Encounter } from '../encounter/encounter';
import { Expansion } from '../expansion/expansion';
import { EntityState } from '@ngrx/entity';
import { SmartNgRXRowBase } from '@smarttools/smart-ngrx';

@Component({
  selector: 'app-test',
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
    expansions$: Observable<EntityState<SmartNgRXRowBase & Expansion>>;
    // instances$: Observable<Instance[]>;
    // encounters$: Observable<Encounter[]>;

    constructor(private store: Store) {
      this.expansions$ = this.store.select(selectExpansionEntities);
      // this.instances$ = this.store.select(selectInstancesForCurrentExpansion) as Observable<Instance[]>;
      // this.encounters$ = this.store.select(selectEncountersForCurrentInstance) as Observable<Encounter[]>;
    }
}
