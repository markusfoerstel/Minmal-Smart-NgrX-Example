import { Injectable } from '@angular/core';
import { EffectService, PartialArrayDefinition } from '@smarttools/smart-ngrx';
import { Instance } from './instance';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InstanceEffectsService extends EffectService<Instance> {
    apiInstances = `https://localhost:8080/api/instances`;

    constructor(private httpClient: HttpClient) {
        super();
    }

    override loadByIds: (ids: string[]) => Observable<Instance[]> = (ids: string[]) => {
        return this.httpClient.post<Instance[]>(this.apiInstances, ids);
    };

    override add(newRow: Instance): Observable<Instance[]> {
        return this.httpClient.post<Instance[]>(this.apiInstances, newRow);
    }

    override update(newRow: Instance): Observable<Instance[]> {
        return this.httpClient.put<Instance[]>(`${this.apiInstances}/${newRow.id}`, newRow);
    }

    override delete(id: string): Observable<void> {
        return this.httpClient.delete<undefined>(`${this.apiInstances}/${id}`);
    }

    override loadByIndexes(
        parentId: string,
        childField: string,
        startIndex: number,
        length: number,
    ): Observable<PartialArrayDefinition> {
        return this.httpClient.post<PartialArrayDefinition>(
            `${this.apiInstances}/indexes`, {
                parentId,
                childField,
                startIndex,
                length,
            },
        );
    }
}
