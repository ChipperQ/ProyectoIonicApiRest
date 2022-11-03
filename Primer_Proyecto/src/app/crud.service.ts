import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  listado = [];
  item : any;
  private urlBaseApi = 'https://jsonplaceholder.typicode.com/';
  constructor(private httpClient: HttpClient, private storage: Storage) {this.init(); }
  
  async init()
  {
    await this.storage.create();
  }
  getUsers()
  {
    let url = this.urlBaseApi + 'users';
    this.listado = [];
    return new Promise((resolve, rejects) => 
    {
      this.httpClient.get(url).subscribe((data:[]) =>
      {
        resolve(data);
        data.forEach(item => { this.listado.push(this.storage); })
        console.log(this.storage);
      },
      error =>
      {
        console.log("Error en el servidor")
      })
    });
  }
  getPost(id: string)
  {
    let url = this.urlBaseApi + 'users/'+ id +"/posts";
    this.listado = [];
    return new Promise((resolve, rejects) => 
    {
      this.httpClient.get(url).subscribe((data:[]) =>
      {
        resolve(data);
        data.forEach(item => { this.listado.push(item); })
      },
      error =>
      {
        console.log("Error en el servidor")
      })
    });
  }
  getComments(id: string)
  {
    let url = this.urlBaseApi + 'posts/'+ id +"/comments";
    this.listado = [];
    return new Promise((resolve, rejects) => 
    {
      this.httpClient.get(url).subscribe((data:[]) =>
      {
        resolve(data);
        data.forEach(item => { this.listado.push(item); })
      },
      error =>
      {
        console.log("Error en el servidor")
      })
    });
  }
  /// leer documentación de la pagina jsonplaceholder
}
