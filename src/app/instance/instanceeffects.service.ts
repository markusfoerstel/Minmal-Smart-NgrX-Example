import { Injectable } from '@angular/core';
import { EffectService, PartialArrayDefinition } from '@smarttools/smart-ngrx';
import { Instance } from './instance';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InstanceEffectsService extends EffectService<Instance> {
    apiRaces = `https://localhost:8080/api/instances`;

    constructor(private httpClient: HttpClient) {
        super();
    }

    // override loadByIds: (ids: string[]) => Observable<Instance[]> = (ids: string[]) => {
    //     return this.httpClient.get<Instance[]>(`${this.apiRaces}?id__in=${ids.join(',')}`);
    // };
    override loadByIds: (ids: string[]) => Observable<Instance[]> = (ids: string[]) => {
        return this.httpClient.post<Instance[]>(this.apiRaces, ids);
    };

    override add(newRow: Instance): Observable<Instance[]> {
        return this.httpClient.post<Instance[]>(this.apiRaces, newRow);
    }

    override update(newRow: Instance): Observable<Instance[]> {
        return this.httpClient.put<Instance[]>(`${this.apiRaces}/${newRow.id}`, newRow);
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
