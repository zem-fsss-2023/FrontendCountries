import { inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Note } from "../types/note";
import {HttpClient} from '@angular/common/http';
import { getDefinedProps } from "../helpers/common.helpers";
import { NOTES_BASE_URL } from "./notes-service.config";

@Injectable({
    providedIn: 'root'
  })
export class NotesService{
    private http = inject(HttpClient);

    getCityInfo(ipAdress: string): Observable<string>{
        return this.http.get<string>(
            `${NOTES_BASE_URL}/${ipAdress}`
        );
    }
}
