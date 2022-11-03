import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Storage } from '@ionic/storage-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-no-camara',
  templateUrl: './no-camara.page.html',
  styleUrls: ['./no-camara.page.scss'],
})
export class NoCamaraPage implements OnInit {
  private urlBaseApi = 'https://jsonplaceholder.typicode.com/';
  constructor(private api: CrudService, private storage: Storage, private httpClient: HttpClient) {this.init();  }
  
  
  async init()
    {
      await this.storage.create();
    }

  async ngOnInit() {
    let url = this.urlBaseApi + 'users';
    this.httpClient.get<any>(this.urlBaseApi+'users').subscribe((res) => {
      console.log(res);
      this.storage = res.resolve;
      console.log(this.storage);
    });
    

}
}
