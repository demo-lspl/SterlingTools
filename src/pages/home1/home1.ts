
import { DemoPage } from './../demo/demo';
import { ApiProvider } from './../../providers/api/api';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, ToastController, IonicPage } from 'ionic-angular';

import { CategoryPage } from '../category/category';
import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';
import { WishlistPage } from '../wishlist/wishlist';
import { ItemdetailPage } from '../itemdetail/itemdetail';

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

  makeList: any = [];    
  modelList: any = [];    
  engineList: any = [];      
  yearList: any = [];    

  strMakeListValue:string;
  strMakeListSelectedValue:string;
  strModelListSelectedValue:string;
  obj;

  constructor(private apiProvider:ApiProvider) { }

  ngOnInit() {     
    this.getCountries();
    this.getMakeApi();    
    }       
            
    
    makeDropDownValue(){   
    console.log("Selected make:  ", this.makeValue); 
     this.strMakeListSelectedValue = this.makeValue;
    // this.strModelListSelectedValue = this.modelValue;
     this.getModelApi(this.strMakeListSelectedValue);
     console.log("Selected make:  ", this.makeValue); 
    }

      
  
    
   
    getMakeApi(){     
      console.log('getMakeApi called    ');
      const service = this.apiProvider.getMakeCategories();
      service.subscribe((data) => {
          const resultado = data;
          this.makeList = resultado; 
          this.strMakeListValue =  resultado;
          //console.log('MakeApi response   ' + resultado);
       });
    }  
      
    getModelApi(strMakeListSelectedValue){     
      console.log('getModelApi called    ');
      const service = this.apiProvider.getModelCategories(strMakeListSelectedValue);
      service.subscribe((data) => {
          const resultado = data;
          this.modelList = resultado; 
          this.strMakeListSelectedValue =  resultado;
          console.log('Selected model:  ' + resultado);

          this.obj = JSON.stringify(data);

          console.log('Selected model obj:   ' + this.obj);

          for( let i=0;i<=this.modelList.length;i++){
            console.log('Selected model obj:   ' + this.modelList[i]);
          }


          // this.getEngineApi(this.strMakeListSelectedValue,resultado);
           // this.getYearApi(this.strMakeListSelectedValue,resultado);
       });
    }     

    getEngineApi(strMakeListSelectedValue,strModelListSelectedValue){     
      console.log('getEngineApi called    ');
      const service = this.apiProvider.getEngineCategories(strMakeListSelectedValue,strModelListSelectedValue);
      service.subscribe((data) => {
          const resultado = data;
          this.engineList = resultado; 
          this.strMakeListSelectedValue =  resultado;
          this.strModelListSelectedValue =  resultado;
          console.log('Engine api response   ' + resultado);
       });
    } 

    getYearApi(strMakeListSelectedValue,strModelListSelectedValue){     
      console.log('getYearApi called    ');
      const service = this.apiProvider.getEngineCategories(strMakeListSelectedValue,strModelListSelectedValue);
      service.subscribe((data) => {
          const resultado = data;
          this.yearList = resultado; 
          this.strMakeListSelectedValue =  resultado;
          this.strModelListSelectedValue =  resultado;
          console.log('Engine api response   ' + resultado);
       });
    } 
  
 
  
  
  getCountries(){
    this.apiProvider.allCountries().subscribe(jsonResponse => {this.countryInfo=jsonResponse.Countries;
        console.log('Data:', this.countryInfo);
      },
      err => console.log('jsonResponse error' + err),
      () => console.log('jsonResponse complete')
    )    
  }    

   

  onChangeCountry(countryValue) {
    this.stateInfo=this.countryInfo[countryValue].States;
    this.cityInfo=this.stateInfo[0].Cities;
  }
  
  onChangeState(stateValue) {
    this.cityInfo=this.stateInfo[stateValue].Cities;
  }
    
  onChangeCity(cityValue) {
    this.cityInfo=this.stateInfo[cityValue].Cities;
  }
}