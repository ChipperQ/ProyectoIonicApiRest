import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../crud.service';
@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
})
export class EstudiantesPage implements OnInit {
  listado = [];
  constructor(private api: CrudService,private activate: ActivatedRoute) { }

  ngOnInit() {
    this.listar();
  }
  async listar(){  
    let id = "";
    this.activate.paramMap.subscribe(async parametros => {
      id = parametros.get("id");
    })
    await this.api.getEstudiantes(id);
    this.listado = this.api.listado;
    console.log(this.listado);
}
}
