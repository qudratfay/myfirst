import { Injectable} from '@angular/core';
// importing http client to make the requests
import {HttpClient,HttpErrorResponse,HttpHandler} from '@angular/common/http';

// import observable related code
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class BlogHttpService {
    public allBlogs;
    public currentBlog;
    public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';   
    private authToken = 'Mzk0M2RlYjY5ZTUyMTk5YjgxZmYyMTFjODg4OTMxNDc0YjE1OGY1OTA3YjljYjFhMjE1YTY1ZDJlMjEwMGUyNjBkYTliMmNmYzhkM2RlOGZmY2IxYjcwMmI2MjczNTliOTA5MTIxNzU2ZTZjNjdhZGVmMmZmY2JiMjU4NTg1Zjk0Nw==' 
    
    constructor(public _http:HttpClient){
        console.log("bloghttp constructor service was called")
    }

// exception handling

    private handleError(err: HttpErrorResponse){
        console.log("Handle error http calls")
        console.log(err.message)
        return Observable.throw(err.message)
    }

     //method to return  all the blogs
     public getAllBlogs(): any{
        
        let myResponse = this._http.get(this.baseUrl+'/all?authToken='+this.authToken);
        console.log(myResponse);
        return myResponse;
    }

    // method to get a paticular Blog
  public getSingleBlogInformation(currentBlogId):  any {

    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken' +this.authToken)
    return myResponse
  
  } // end of blogInformation function


}
