
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

  makeList: any = [];    
  modelList: any = [];    
  engineList: any = [];      
  yearList: any = [];    
  productCategoryList: any = []; 

  strMakeListValue:string;
  strMakeListSelectedValue:string;
  strModelListSelectedValue:string;
  strEngineListSelectedValue:string;
  obj;
  companyName: any;
  newid: any;
  strDynamicId:string;
 

  constructor(public apiProvider:ApiProvider,
              public httpClient: HttpClient,
              public navCtrl: NavController) { }

  ngOnInit() {     
    this.getMakeApi(); 
    }       

  
    getOuterName(event){
      console.log("companyName"+this.companyName);
      this.strDynamicId = this.companyName;
   }
            
      
   

   
    getMakeApi(){     
      console.log('getMakeApi called    ');
      const service = this.apiProvider.searchMakeCategories();
      service.subscribe((data) => {
          const resultado = data;
          this.makeList = resultado; 
          this.strMakeListValue =  resultado;
          //console.log('MakeApi response   ' + resultado);
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
            this.getEngineApi(strMakeListSelectedValue,this.strTestValue);
           // this.getYearApi(strMakeListSelectedValue,this.strModelListSelectedValue,this.strEngineListSelectedValue);
       });
    }     
 
    getEngineApi(strMakeListSelectedValue,strModelListSelectedValue){     
      console.log('getEngineApi called    ' + this.strTestValue);
      
      const service = this.apiProvider.getEngineCategories(strMakeListSelectedValue,strModelListSelectedValue);
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
      // this.strModelListSelectedValue = this.modelValue;
       this.getModelApi(this.strMakeListSelectedValue);
       console.log("Selected make:  ", this.makeValue); 
      }
  
      onChangeModel(modelValue){
        console.info("Selected Model: ",this.modelValue);
        this.strTestValue = modelValue;
        // this.strModelListSelectedValue = modelValue;
      }
                   
    searchData(strMakeListSelectedValue,strModelListSelectedValue,engine,year){

      this.navCtrl.push(SearchproductsPage, 
          {
            make: this.makeValue,
            model: this.modelValue,
            engine:this.engineValue,
            year:this.yearValue
          });

          console.log("Sent product make " + this.makeValue);
          console.log("Sent product model " + this.modelValue);
          console.log("Sent product engine " + this.engineValue);
          console.log("Sent product year " + this.yearValue);
      
    }
  

    // productDetailPage(catId) {
    //   this.navCtrl.push(SearchPage, {
    //     catId: catId,
       
    //   });
    //   console.log("Sent product id " + catId);
      
    // }
  
 
  
  
   

   

  


}