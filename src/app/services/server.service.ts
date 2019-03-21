import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StoreDataService {
    constructor(private http: HttpClient) {}
    storeData(data: any []) {
        return this.http.post('http://localhost:3000/subscribers', data);
    }
}