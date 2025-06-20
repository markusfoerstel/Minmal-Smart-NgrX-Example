import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { SmartNgRXRowBase } from '@smarttools/smart-ngrx';
import { selectExpansions } from '../expansion/top-expansions.selectors';

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
      this.expansions$ = this.store.select(selectExpansions);
      // this.instances$ = this.store.select(selectInstances) as Observable<Instance[]>;
      // this.encounters$ = this.store.select(selectEncountersForCurrentInstance) as Observable<Encounter[]>;
    }
}
  