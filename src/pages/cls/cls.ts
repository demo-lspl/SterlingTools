import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cls',
  templateUrl: 'cls.html',
})
export class ClsPage implements OnInit{

  obj;
  strResponse:string;
  strDataServer:string;
  url:string = 'http://busybanda.com/sterling-tools/api/get_category_by_id?id=39493';
  categoriesList: any = [];


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,   
              public loadingController: LoadingController,
              public httpClient: HttpClient) {
  }
    
  ngOnInit(){   
    this.getCategoriesApi();    
  }   

  async getCategoriesApi() {
    const loader = await this.loadingController.create({
      content: 'Please wait fetching data!',
    });

    await loader.present();
    loader.present().then(() => {      
      // const service = this.apiProvider.getOrders();   
      // service.subscribe((jsonResponse) => {      
       this.httpClient.get(this.url).subscribe(jsonResponse => {
      if(jsonResponse){
        this.categoriesList = jsonResponse['result'];
        this.obj = JSON.stringify(jsonResponse);
        console.log('details available '+ this.obj );
        loader.dismiss(); 
      }

      const myURL_body = jsonResponse['result'];
      this.strResponse = myURL_body;

     if(this.strResponse = 'null'){
      console.log('details available obj empty ' );
      this.strDataServer = 'No data';
     }
      else { 
        console.log('details not available ' );
      }
      },
        error => { 
          console.log(error);
         // this.showToastOnProductError(error);
        });
    });
  }

}
