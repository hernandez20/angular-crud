import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeForm:FormGroup;
  elId:any;

  constructor(
    public formulario:FormBuilder,
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    private ruteador:Router
  ) {
    this.elId = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elId);
    this.crudService.getEmployee(this.elId).subscribe(respuesta=>{
      console.log(respuesta);
      this.employeeForm.setValue({
        nombre:respuesta[0]['nombre'],
        correo:respuesta[0]['correo']
      })
    });
    this.employeeForm = this.formulario.group({
      nombre:[''],
      correo:['']
    });
   }

  ngOnInit(): void {
  }

  sendData():any{
    console.log(this.elId);
    console.log(this.employeeForm.value);
    this.crudService.editEmployee(this.elId, this.employeeForm.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/list-employee');
    });
  }

}
