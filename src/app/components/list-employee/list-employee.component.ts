import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],

  animations: [
    trigger('enterState', [
      state('void', style({
        transform: 'translateX(-3%)',
        opacity: 0
      })),
      transition(":enter", [
        animate(300, style({
          transform: 'translateX(0)', opacity: 1
        }))
      ])
    ]),

    trigger('emplyeItem',[
      transition(':leave',[
        animate(900, style({
          transform: 'translateX(0)',
          opacity:0,
          

        }))

      ])
    ])
  ]



})


export class ListEmployeeComponent implements OnInit {

  Employees: any;

  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.getAllEmployee().subscribe(respuesta => {
      console.log(respuesta);
      this.Employees = respuesta;
    });
  }

  borrarRegistro(id: any, iControl: any) {
    // console.log(id);
    // console.log(iControl);
    if (window.confirm("¿Desea borrar el registro?")) {
      this.crudService.deleteEmployee(id).subscribe((respuesta) => {
        this.Employees.splice(iControl, 1);
      });
    }
  }
}
