import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm:FormGroup;

  constructor(public formulario:FormBuilder, 
    private crudService:CrudService,
    private ruteador:Router) {
      this.employeeForm = this.formulario.group({
        nombre:[''],
        correo:['']
      })
   }

  ngOnInit(): void {
  }

  sendData():any {
    console.log("Me presionaste");
    console.log(this.employeeForm.value);
    this.crudService.addEmployee(this.employeeForm.value).subscribe(respuesta=>{
      this.ruteador.navigateByUrl('/list-employee');
    });
  }

}
