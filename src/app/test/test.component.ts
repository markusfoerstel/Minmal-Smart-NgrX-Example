import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectEncounterEntities } from '../tree-standard/tree-standard.selectors';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Encounter, EncounterEntity } from '../encounter/encounter';
import { selectEncounters } from '../encounter/encounter.selectors';
import { Instance } from '../instance/instance';

@Component({
  selector: 'app-test',
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
    encounters$: Observable<Instance[]>;

    constructor(private store: Store) {
        this.encounters$ = this.store.select(selectEncounters);
    }
}
