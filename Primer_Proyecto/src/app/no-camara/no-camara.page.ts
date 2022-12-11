import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-no-camara',
  templateUrl: './no-camara.page.html',
  styleUrls: ['./no-camara.page.scss'],
})
export class NoCamaraPage implements OnInit {
  listado = [];
  constructor(private api: CrudService, private storage: Storage) {this.init();  }
  
  
  async init()
    {
      await this.storage.create();
    }

  async ngOnInit() {
    this.listar();
}
async listar(){  
  this.api.getMaterias();
  this.listado = this.api.listado;
}

}
