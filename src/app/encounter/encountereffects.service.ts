import { Injectable } from '@angular/core';
import { EffectService, PartialArrayDefinition } from '@smarttools/smart-ngrx';
import { Encounter } from './encounter';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EncounterEffectsService extends EffectService<Encounter> {
    apiEncounters = `https://localhost:8080/api/encounters`;

    constructor(private httpClient: HttpClient) {
        super();
    }

    // override loadByIds: (ids: string[]) => Observable<Encounter[]> = (ids: string[]) => {
    //     return this.httpClient.get<Encounter[]>(`${this.apiRaces}?id__in=${ids.join(',')}`);
    // };
    override loadByIds: (ids: string[]) => Observable<Encounter[]> = (ids: string[]) => {
        console.log('EncounterEffectsService.loadByIds', ids);
        return this.httpClient.post<Encounter[]>(this.apiEncounters + '/loadByIds/', ids);
    };

    override add(newRow: Encounter): Observable<Encounter[]> {
        console.log('EncounterEffectsService.add', newRow);
        return this.httpClient.post<Encounter[]>(this.apiEncounters, newRow);
    }

    override update(newRow: Encounter): Observable<Encounter[]> {
        console.log('EncounterEffectsService.update', newRow);
        return this.httpClient.put<Encounter[]>(`${this.apiEncounters}/${newRow.id}`, newRow);
    }

    override delete(id: string): Observable<void> {
        console.log('EncounterEffectsService.delete', id);
        return this.httpClient.delete<undefined>(`${this.apiEncounters}/${id}`);
    }

    override loadByIndexes(
        parentId: string,
        childField: string,
        startIndex: number,
        length: number,
    ): Observable<PartialArrayDefinition> {
        console.log('EncounterEffectsService.loadByIndexes', parentId, childField, startIndex, length);
        return this.httpClient.post<PartialArrayDefinition>(
            `${this.apiEncounters}/indexes`, {
                parentId,
                childField,
                startIndex,
                length,
            },
        );
    }
}
