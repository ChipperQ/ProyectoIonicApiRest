import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
})
export class EstudiantesPage implements OnInit {
  listado = [];
  constructor(private api: CrudService) { }

  ngOnInit() {
    this.listar();
  }
  async listar(){  
    this.api.getEstudiantes();
    this.listado = this.api.listado;
}
}
