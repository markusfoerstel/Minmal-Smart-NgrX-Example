import { Injectable } from '@angular/core';
import { EffectService, PartialArrayDefinition } from '@smarttools/smart-ngrx';
import { Encounter } from './encounter';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EncounterEffectsService extends EffectService<Encounter> {
    apiRaces = `https://localhost:8080/api/encounter`;

    constructor(private httpClient: HttpClient) {
        super();
    }

    // override loadByIds: (ids: string[]) => Observable<Encounter[]> = (ids: string[]) => {
    //     return this.httpClient.get<Encounter[]>(`${this.apiRaces}?id__in=${ids.join(',')}`);
    // };
    override loadByIds: (ids: string[]) => Observable<Encounter[]> = (ids: string[]) => {
        return this.httpClient.post<Encounter[]>(this.apiRaces, ids);
    };

    override add(newRow: Encounter): Observable<Encounter[]> {
        return this.httpClient.post<Encounter[]>(this.apiRaces, newRow);
    }

    override update(newRow: Encounter): Observable<Encounter[]> {
        return this.httpClient.put<Encounter[]>(`${this.apiRaces}/${newRow.id}`, newRow);
    }

    override delete(id: string): Observable<void> {
        return this.httpClient.delete<undefined>(`${this.apiRaces}/${id}`);
    }

    override loadByIndexes(
        parentId: string,
        childField: string,
        startIndex: number,
        length: number,
    ): Observable<PartialArrayDefinition> {
        return this.httpClient.post<PartialArrayDefinition>(
            `${this.apiRaces}/indexes`, {
                parentId,
                childField,
                startIndex,
                length,
            },
        );
    }
}
