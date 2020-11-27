
import { DemoPage } from './../demo/demo';
import { ApiProvider } from './../../providers/api/api';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, ToastController, IonicPage } from 'ionic-angular';

import { CategoryPage } from '../category/category';
import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';
import { WishlistPage } from '../wishlist/wishlist';
import { ItemdetailPage } from '../itemdetail/itemdetail';
import { HttpClient } from '@angular/common/http';
import { SearchproductsPage } from '../searchproducts/searchproducts';

/**
 * Generated class for the Home1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@IonicPage()
@Component({
  selector: 'page-home1',
  templateUrl: 'home1.html',
})
export class Home1Page implements OnInit{

  stateInfo: string| any[] = [];   
  countryInfo: any[] = [];
  cityInfo: string |any[] = [];  
  makeInfo: string |any= [];
  modelInfo: string |any[] = [];
  makeValue:string;
  modelValue:string;
  engineValue:string;
  yearValue:string;

  strTestValue:string;
  strTestValue1:string;
  strTestValue2:string;
  strTestValue3:string;


  makeList: any = [];    
  modelList: any = [];    
  engineList: any = [];      
  yearList: any = [];    
  productCategoryList: any = []; 
  products: any = []; 


  strMakeListValue:string;
  strMakeListSelectedValue:string;
  strModelListSelectedValue:string;
  strEngineListSelectedValue:string;
  obj;
  companyName: any; 
  newid: any; 
  strDynamicId:string;
  subject='';
  body='';
  to='';
  searchText;
  showDataboolean = false;

 

  constructor(public apiProvider:ApiProvider,
              public httpClient: HttpClient,
              public navCtrl: NavController,
              public toastController: ToastController,
              public apiService: ApiProvider
              ) { }

  ngOnInit() {     
    this.getMakeApi(); 
    this.getProducts();    
    }        
    getMakeApi(){       
      console.log('getMakeApi called    ');
      const service = this.apiProvider.searchMakeCategories();
      service.subscribe((data) => {
          const resultado = data;
          this.makeList = resultado; 
          this.strMakeListValue =  resultado;
       });
    }  
        
    getModelApi(strMakeListSelectedValue){     
      console.log('getModelApi called    ');
      const service = this.apiProvider.getMakeCategories(strMakeListSelectedValue);
      service.subscribe((data) => {
          const resultado = data;
          this.modelList = resultado; 
          this.strMakeListSelectedValue =  resultado;
          this.strModelListSelectedValue =  resultado;
          this.strEngineListSelectedValue =  resultado;
          this.obj = JSON.stringify(data);
          console.log('Selected model tushar:  ' + this.strTestValue);
           
       });
    }       

    triggerMeModel(value: string): void {
      console.log("selected value", value);
      this.strTestValue1 = value;
      console.log("selected strTestValue1", this.strTestValue1);
      this.getEngineApi(this.makeValue,this.strTestValue1);
    }
  
    triggerMeEngine(value: string): void {
      console.log("selected value", value);
      this.strTestValue2 = value;
      console.log("selected strTestValue2", this.strTestValue2);
      this.getYearApi(this.makeValue,this.strTestValue1,this.strTestValue2);
    }
  
    triggerMeYear(value: string): void {
      console.log("selected value", value);
      this.strTestValue3 = value;  
      console.log("selected strTestValue3", this.strTestValue3);
      this.getYearApi(this.makeValue,this.strTestValue2,this.strTestValue3);
    }
    getEngineApi(strMakeListSelectedValue,strModelListSelectedValue){     
      console.log('getEngineApi called    ' + this.strTestValue1);
      const service = this.apiProvider.getEngineCategories(strMakeListSelectedValue,this.strTestValue1);
      service.subscribe((data) => {
          const resultado = data;
          this.engineList = resultado; 
          this.strMakeListSelectedValue =  resultado;
          this.strModelListSelectedValue =  resultado;
          this.strModelListSelectedValue =  this.modelValue;
          console.log('Engine api response  make ' + strMakeListSelectedValue);
          console.log('Engine api response  model ' + strModelListSelectedValue);

       });
    } 

    getYearApi(strMakeListSelectedValue,strModelListSelectedValue,strEngineListSelectedValue){     
      console.log('getYearApi called    ');
      const service = this.apiProvider.getYearCategories(strMakeListSelectedValue,strModelListSelectedValue,strEngineListSelectedValue);
      service.subscribe((data) => {
          const resultado = data;
          this.yearList = resultado; 
          this.strMakeListSelectedValue =  resultado;
          this.strModelListSelectedValue =  resultado;
          console.log('Engine api response   ' + resultado);
       });
    }    
    makeDropDownValue(){   
       this.strMakeListSelectedValue = this.makeValue;
       this.getModelApi(this.strMakeListSelectedValue);
       console.log("Selected make:  ", this.makeValue); 
      }
    searchData(makeValue,strTestValue2,strTestValue3,year){

    

    if(!this.makeValue ){
      console.log('issue make');
      this.showToastOnEmptyMake();
    }
     else if(!this.strTestValue1){
      this.showToastOnEmptyModel();
      console.log('issue model');
    }

    else {
      console.log('success!!!!!!');
      this.navCtrl.push(SearchproductsPage, 
          {
            make: this.makeValue,
            model: this.strTestValue2,
            engine:this.strTestValue1,
            year:this.yearValue
          });

          console.log("Sent product make " + this.makeValue);
          console.log("Sent product model " + this.strTestValue2);
          console.log("Sent product engine " + this.strTestValue1);
          console.log("Sent product year " + this.yearValue);
    }
    }

    async showToastOnEmptyMake()
{  
 const toast = await this.toastController.create({
   message: 'Please select Make ',
   duration: 3000,
   position: 'bottom',
 });
 toast.present();
} 

async showToastOnEmptyModel()
{
 const toast = await this.toastController.create({
   message: 'Please select Model ',
   duration: 3000,
   position: 'bottom',
 });
 toast.present();
} 
  
                   
getProducts(){ 
  const service = this.apiService.getProducts();
  service.subscribe((data) => {

    if (data) {
      const resultado = data;
      console.log(resultado);
      this.products = resultado;

        
      
     }
     
    

    else {
      this.showDataboolean = false;
    }
  });
}

}