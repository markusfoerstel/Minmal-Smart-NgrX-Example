import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Instance } from '../instance/instance';
import { selectExpansionEntities, selectInstancesForCurrentExpansion } from '../expansion/expansion.selectors';
import { Encounter } from '../encounter/encounter';
import { Expansion } from '../expansion/expansion';
import { EntityState } from '@ngrx/entity';
import { SmartNgRXRowBase } from '@smarttools/smart-ngrx';
// import { selectInstances } from '../instance/instance.selectors';

@Component({
  selector: 'app-test',
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
    expansions$: Observable<SmartNgRXRowBase[]>;
    // instances$: Observable<Instance[]>;
    // encounters$: Observable<Encounter[]>;

    constructor(private store: Store) {
      this.expansions$ = this.store.select(selectInstancesForCurrentExpansion);
      // this.instances$ = this.store.select(selectInstances) as Observable<Instance[]>;
      // this.encounters$ = this.store.select(selectEncountersForCurrentInstance) as Observable<Encounter[]>;
    }
}
