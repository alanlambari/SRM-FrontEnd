import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { FormularioDTO } from "../../models/FormularioDTO";
import { Observable } from "rxjs/Rx";


@Injectable()
export class FormularioService {

    constructor(public http: HttpClient){

    }

    findAll() : Observable<FormularioDTO[]>{
        return this.http.get<FormularioDTO[]>(`${API_CONFIG.baseUrl}/formularios`)
    }

    cadastrar(obj : FormularioDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/formularios`, 
            obj,
            { 
                observe: 'response', 
                responseType: 'text'
            }
        ); 
    }

    excluir(id: string){
        return this.http.delete(`${API_CONFIG.baseUrl}/formularios/${id}`)
    }


}