import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){

  }
    getBooks(){
      return this._http.get('/api/books')
     }
  
     createBook(newBook){
       return this._http.post('/api/book',newBook)
     }
  
     getBook(_id:string){
      return this._http.get(`/api/book/${_id}`);
      
     }
  
     updateOne(_id:string, book:Book){
       return  this._http.put(`/api/book/${_id}`,book);
      
     }
  
     deleteOne(_id){
       console.log("made it to the service", _id)
      return this._http.delete(`/api/book/${_id}`);
      
     }

}