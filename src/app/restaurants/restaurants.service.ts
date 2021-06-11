import { Injectable } from "@angular/core";
import { Restaurant } from "./restaurant/restaurant.model";
import { Http } from "@angular/http";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from "app/app.error-handler";

@Injectable()
export class RestaurantsService {

    constructor(private http: Http) {
    }

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`) //Retorna Observabe<Response>, com resposta "crua"
          .map(response => response.json()) //Recebe resposta e mapeia para .json
          .catch(ErrorHandler.handleError);
    }
}