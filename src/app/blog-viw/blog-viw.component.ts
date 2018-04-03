import { Component, OnInit, OnDestroy } from '@angular/core';
//import route related code
import { ActivatedRoute, Router } from '@angular/router';
// import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';


@Component({
  selector: 'app-blog-viw',
  templateUrl: './blog-viw.component.html',
  styleUrls: ['./blog-viw.component.css']
})
export class BlogViwComponent implements OnInit, OnDestroy {

  public currentBlog;


  




  //end of allBlog
  constructor(private _route: ActivatedRoute, private router: Router,public blogHttpService:BlogHttpService) {
    console.log("constructor is called in blogViewComponent ");
  }
  ngOnInit() {
    console.log("ngOnInit was called in blogViewComponent")
    //getting the blog Id from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    //calling the function to get the blog with this blogId out of the overall array
  this.currentBlog = this.blogHttpService.getSingleBlogInformation(myBlogId);
  console.log(this.currentBlog);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

        data =>{
          console.log(data);
          this.currentBlog = data["data"];
        },
        error =>{
          console.log("some error");
          console.log(error.errorMessage)
        }
        
    )
  }



  ngOnDestroy() {
    console.log("blogView Ondestroy was called");
  }


}   //end of class
