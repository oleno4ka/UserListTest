import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { User } from "../models/user.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})

export class UserListService {
    constructor(private http: HttpClient) { }

    getUserList(): Observable<User[]> {
        return this.http.get<User[]>('http://localhost:3000/api/users');
    }
}