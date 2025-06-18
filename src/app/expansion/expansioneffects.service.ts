import { Injectable } from '@angular/core';
import { EffectService, PartialArrayDefinition } from '@smarttools/smart-ngrx';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expansion } from './expansion';

@Injectable({
  providedIn: 'root'
})
export class ExpansionEffectsService extends EffectService<Expansion>{
    apiExpansions = `https://localhost:8080/api/expansions`;

    constructor(private httpClient: HttpClient) {
        super();
    }

    override loadByIds: (ids: string[]) => Observable<Expansion[]> = (ids: string[]) => {
        console.log('ExpansionEffectsService.loadByIds', ids);
        return this.httpClient.post<Expansion[]>(this.apiExpansions + '/loadByIds/', ids);
    };

    override add(newRow: Expansion): Observable<Expansion[]> {
        console.log('ExpansionEffectsService.add', newRow);
        return this.httpClient.post<Expansion[]>(this.apiExpansions, newRow);
    }

    override update(newRow: Expansion): Observable<Expansion[]> {
        console.log('ExpansionEffectsService.update', newRow);
        return this.httpClient.put<Expansion[]>(`${this.apiExpansions}/${newRow.id}`, newRow);
    }

    override delete(id: string): Observable<void> {
        console.log('ExpansionEffectsService.delete', id);
        return this.httpClient.delete<undefined>(`${this.apiExpansions}/${id}`);
    }

    override loadByIndexes(
        parentId: string,
        childField: string,
        startIndex: number,
        length: number,
    ): Observable<PartialArrayDefinition> {
        console.log('ExpansionEffectsService.loadByIndexes', parentId, childField, startIndex, length);
        return this.httpClient.post<PartialArrayDefinition>(
            `${this.apiExpansions}/indexes`, {
                parentId,
                childField,
                startIndex,
                length,
            },
        );
    }
}
