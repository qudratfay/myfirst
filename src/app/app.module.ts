import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
//router module used for setting up the application level route
import {RouterModule,Routes} from '@angular/router'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViwComponent } from './blog-viw/blog-viw.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';

//import statement for srvice 
// import {BlogService} from "./blog.service";
 import { BlogHttpService } from './blog-http.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViwComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent
  ],
  imports: [
    
    BrowserModule,
    HttpModule,
  
    //routerModule forRoot method to declare the possible routes in application
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'about',component:AboutComponent},
      {path:'blog/:blogId',component:BlogViwComponent},
      {path:'create',component:BlogCreateComponent},
      {path:'edit/:blogId',component:BlogEditComponent}
     // {path:'**',component:NotFoundComponent}
    ])
  ],
  providers: [BlogHttpService,HttpClient,HttpClientModule], 
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}

