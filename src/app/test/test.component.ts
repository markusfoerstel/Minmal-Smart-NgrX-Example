import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { selectEncounters } from '../encounter/encounter.selectors';
import { Instance } from '../instance/instance';
import { selectInstancesForCurrentExpansion } from '../instance/instance.selectors';
import { selectEncountersForCurrentInstance } from '../expansion/expansion.selectors';
import { Encounter } from '../encounter/encounter';

@Component({
  selector: 'app-test',
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
    instances$: Observable<Instance[]>;
    // encounters$: Observable<Encounter[]>;


    constructor(private store: Store) {
        this.instances$ = this.store.select(selectInstancesForCurrentExpansion) as Observable<Instance[]>;
        // this.encounters$ = this.store.select(selectEncountersForCurrentInstance) as Observable<Encounter[]>;
    }
}
