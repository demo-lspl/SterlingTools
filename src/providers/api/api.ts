/*
  Created by Lasting Software 
*/



import { LoadingController, Events } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map} from 'rxjs/operators';
import { Storage } from '@ionic/storage';


@Injectable()
export class ApiProvider {
   httpClientFetch = [];

  constructor(public httpClient: HttpClient,
              public loadingController: LoadingController,
              public events: Events,
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


  getProductCart(){
    this.showProductCartLoader();
    return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_current_cart?id=3');
  }


  getFeaturedProducts(){
     this.showFeaturedProductsLoader();
     return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_featured_product').pipe(map((res: any) => this.httpClientFetch = res.result));
    }

  getTest(){
    return this.httpClient.get('http://pridediesel.com/pridediesel/api/getdrivers').pipe(map((res: any) => this.httpClientFetch = res.results));
  }
  getTest1(){
    return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_cart_items?' +  'custid=' + localStorage.getItem('Userid value')).pipe(map((res: any) => this.httpClientFetch = res.result));
  }
  getTest2(){
    return this.httpClient.get('http://busybanda.com/sterling-tools/api/get_cart_items?custid=831').pipe(map((res: any) => this.httpClientFetch = res.result));
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
      duration: 600,
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


  async showFeaturedProductsLoader() {
    const loading = await this.loadingController.create({
      content: 'Please wait fetching Products!' ,
      spinner: 'hide',
      duration: 600,
    });
    await loading.present();
  } 
  
// set a key/value
async set(key: string, value: any): Promise<any> {
  try {
  const result = await this.storage.set(key, value);
  console.log('set string in storage: ' + result);
  return true;
  } catch (reason) {
  console.log(reason);
  return false;
  }
  }
  // to get a key/value pair
  async get(key: string): Promise<any> {
  try {
  const result = await this.storage.get(key);
  console.log('storageGET: ' + key + ': ' + result);
  if (result != null) {
  return result;
  }
  return null;
  } catch (reason) {
  console.log(reason);
  return null;
  }
  }
  // set a key/value object
  async setObject(key: string, object: Object) {
  try {
  const result = await this.storage.set(key, JSON.stringify(object));
  console.log('set Object in storage: ' + result);
  return true;
  } catch (reason) {
  console.log(reason);
  return false;
  }
  }
  // get a key/value object
  async getObject(key: string): Promise<any> {
  try {
  const result = await this.storage.get(key);
  if (result != null) {
  return JSON.parse(result);
  }
  return null;
  } catch (reason) {
  console.log(reason);
  return null;
  }
  }
  // remove a single key value:
  remove(key: string) {
  this.storage.remove(key);
  }
  //  delete all data from your application:
  clear() 
  {
  this.storage.clear();
  }
    

}
