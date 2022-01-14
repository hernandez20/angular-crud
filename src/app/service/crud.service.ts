import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: string = 'http://localhost:8080/';

  constructor(private clienteHttp:HttpClient) { }

  addEmployee(datosEmpleado:Employee):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosEmpleado);
  }

  getAllEmployee(){
    return this.clienteHttp.get(this.API);
  }

  deleteEmployee(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+id);
  }

  getEmployee(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+id);
  }

  editEmployee(id:any, datosEmpleado:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id,datosEmpleado);
  }
}