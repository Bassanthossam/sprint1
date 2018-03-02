import { Component,OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: `./products.component.html`,
})
export class ProductsComponent implements OnInit {
 username = JSON.parse(localStorage.getItem("user"));
   Name='';
   Price=0;
   update = false;
   editedItem:any=[];
  products:any=[];
  IdForEdit='';
  
  constructor( private httpClient: HttpClient){}

 ngOnInit(){
  this.httpClient.get(environment.apiUrl+'product/getProducts').subscribe(
    res =>{
      console.log(res);
    }
   ); 
  }

getProducts(){
  this.httpClient.get(environment.apiUrl+'product/getProducts').subscribe(
         res =>{
           this.products=res['data'];
           console.log(res);
         }
        );
}
postProduct(data,config){
  this.httpClient.post(environment.apiUrl+'product/createProduct',data,config).subscribe(
    res =>{
      console.log(res);
    }
   );
}
onKey(name: KeyboardEvent){
  this.Name = (<HTMLInputElement>event.target).value;
};
onKey1(price: KeyboardEvent){
  this.Price =parseInt( (<HTMLInputElement>event.target).value);
};
createProduct(){
  if(this.update){
 
  var data = JSON.stringify({name:this.Name,price:this.Price,sellerName:this.username.username});
  var config = {
    headers:
    {
'Content-Type' : 'application/json'
    }
  }
    console.log(data);
  this.httpClient.patch(environment.apiUrl+'product/updateProduct/'+localStorage.getItem("productID"),data,config).subscribe( 
    (data:any)=>
    { console.log(data);
    }
    );
    localStorage.setItem("updating","false");
    this.update=false;
  }
    else{
      var data = JSON.stringify({name:this.Name,price:this.Price,sellerName:this.username.username});
  var config = {
    headers:
    {
'Content-Type' : 'application/json'
    }
  }
  this.postProduct(data,config);
  window.location.reload();
    }

}
deleteProduct(ident:string){
  var config = {
    headers :
    {
      'Content-Type' : 'application/json'
    }
  }
  console.log(ident);
  this.httpClient.delete(environment.apiUrl+'product/deleteProduct/'+ident,config).subscribe();
   window.location.reload();
    }
updateProduct(idObject:string){
 
  
    localStorage.setItem("productID",idObject);
    localStorage.setItem("updating","true");
    this.update=true;
   window.location.reload();
   this.createProduct();
}

}

