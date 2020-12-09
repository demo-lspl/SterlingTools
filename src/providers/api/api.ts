/*
  Created by Lasting Software 
*/


import { LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map} from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { Observable} from 'rxjs';
import { catchError, retry,  delay} from 'rxjs/operators';


// My Custom set of data 
export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}



@Injectable()   
export class ApiProvider {
   httpClientFetch = [];
   urlCountries :string = "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";
   urlMake:string = 'http://busybanda.com/sterling-tools/api/mmey_make_search';

 // Storing the url from where I want to fetch the data
 url = 'https://www.omdbapi.com/';
 //The api key for it
 apiKey = 'ee67e267';


  constructor(public httpClient: HttpClient,
              public loadingController: LoadingController,
              public storage: Storage) {
  }

  getProducts(){
    this.showProductsLoader();
    return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_products/')
    .pipe(map((res: any) => this.httpClientFetch = res.result));
  }
    

  getOrders(){ 
    this.showViewOrderLoader();
    return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_shop_order/')
    .pipe(map((res: any) => this.httpClientFetch = res.result));
  }

  getCart(){
    this.showProductCartLoader();
    return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_cart_items?' +'custid=' + localStorage.getItem('Userid value'))
    .pipe(map((res: any) => this.httpClientFetch = res.result));
  }

  getProductCategoriesGrid(){
    this.showProductCategoriesLoader();
    return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_products_category_grid')
    .pipe(map((res: any) => this.httpClientFetch = res.result));
  }

  getProductCategories(){
    this.showProductCategoriesLoader();
    return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_products_category')
    .pipe(map((res: any) => this.httpClientFetch = res.result));
  }
 
  searchMakeCategories(){
    return this.httpClient.get('http://busybanda.com/sterling-tools/api/mmey_make_search')
    .pipe(map((res: any) => this.httpClientFetch = res.result));
  }            

  getMakeCategories(make: string){
    return this.httpClient.get('http://busybanda.com/sterling-tools/api/mmey_model_search?make=' + make )
    .pipe(map((res: any) => this.httpClientFetch = res.result));
  }

  getEngineCategories(make: string,model:string){
    return this.httpClient.get('http://busybanda.com/sterling-tools/api/mmey_engine_search?make=' + make + '&model=' + model )
    .pipe(map((res: any) => this.httpClientFetch = res.result));
  }

  getYearCategories(make: string,model:string,engine:string){
    return this.httpClient.get('http://busybanda.com/sterling-tools/api/mmey_year_search?make=' + make + '&model=' + model + '&engine=' + engine )
    .pipe(map((res: any) => this.httpClientFetch = res.result));
  }

  getSearchData(make: string,model:string,engine:string,year:string){
    return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_products_mmey_search?make=' + make + '&model=' + model + '&engine=' + engine  + '&year=' + year)
    .pipe(map((res: any) => this.httpClientFetch = res.result));
  }

 
  getFeaturedProducts(){
    
     this.showFeaturedProductsLoader();
     return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_featured_product').pipe(map((res: any) => this.httpClientFetch = res.result));
    }

    getFeaturedProducts1(){
      this.showFeaturedProductsLoader();
      return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_featured_product').pipe(map((res: any) => this.httpClientFetch = res.result));
     }

  getTest(){
    return this.httpClient.get('http://pridediesel.com/pridediesel/api/getdrivers').pipe(map((res: any) => this.httpClientFetch = res.results));
  }
  getCartDetails(){
    return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_cart_items?' +  'custid=' + localStorage.getItem('Userid value')).pipe(map((res: any) => this.httpClientFetch = res.result));
  }

  allCountries(): Observable<any>{
    return this.httpClient.get(this.urlCountries);
  }

  allMake(): Observable<any>{
    return this.httpClient.get(this.urlMake);
  }
  


  async showProductsLoader() {
    const loading = await this.loadingController.create({
      content: 'Please wait fetching products!',
      duration: 600,
    });
    await loading.present();
  }  

  async showViewOrderLoader() {
    const loading = await this.loadingController.create({
      content: 'Please wait fetching orders!',
      duration: 2000,
    });
    await loading.present();
  }


  async showProductCategoriesLoader() {
    const loading = await this.loadingController.create({
      content: 'Please wait fetching Product Categories!',
      duration: 1500,
    });  
    await loading.present();
  }

  async showProductCartLoader() {
    const loading = await this.loadingController.create({
      content: 'Please wait fetching Cart!',
      duration: 600,
    });
    await loading.present();
  }

  async showMakeLoader() {
    const loading = await this.loadingController.create({
      content: 'Please wait fetching Make data!',
      duration: 3600,
    });
    await loading.present();
  }


  async showFeaturedProductsLoader() {
    const loading = await this.loadingController.create({
      content: 'Please wait fetching Products!' ,
      spinner: 'hide',
      duration: 600,
    });
    await loading.present();
  } 

 

}
