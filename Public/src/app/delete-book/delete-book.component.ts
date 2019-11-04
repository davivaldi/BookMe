import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { HttpService } from "../http.service";
import { Book } from '../book';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {
  id="";
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
      console.log("got our books", data);
      this.book = data;
    });
  }
  
  deleteOne(id){
    console.log("in the delete function",id)
    let observable = this._httpService.deleteOne(id);
    observable.subscribe(data => {
    this.goHome();
    })
  }


goHome() {
  this._router.navigate(['/']);
}
}
