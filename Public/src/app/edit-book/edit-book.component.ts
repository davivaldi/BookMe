import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { HttpService } from "../http.service";
import { Book } from '../book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  id ="";
  book: Book;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) {}
  
  ngOnInit() {
    this._route.paramMap.subscribe((paramMap: ParamMap) => {
      let _id = paramMap.get("_id")
      console.log(_id)
      this.getBook(_id);
    });
  }
  
  getBook(_id:string) {
    let observable = this._httpService.getBook(_id);
    observable.subscribe((data : Book)=> {
      console.log("got our Tasks", data);
      this.book = data;
    });
  }
  
  onSubmitEdit(_id: string) {
    let observable = this._httpService.updateOne(_id,this.book);
    observable.subscribe((data: Book) => {
      console.log("Got data from the form", data);
      console.log(data);
      console.log(_id);
      this.goHome();
    });
}



goHome() {
  this._router.navigate(['/']);
}

}
