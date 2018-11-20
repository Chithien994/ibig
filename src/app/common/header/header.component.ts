/*
ChiThienTCN
Header Component
*/
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { AppRoutingModule } from '../../app-routing.module';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(
    public appComponent: AppComponent,
    public appRouting: AppRoutingModule,
    public router: Router,
    public location: Location
    ) {}

  ngOnInit() {}

  currentRouter: Object = {path:'',data:{title:"",isShow:false}};
  setCurrentRouter(){

    for(let route of this.appRouting.routes){
      if(route.path===this.router.url.split("/")[1] ||
      this.router.url.search(route.path.substring(0, 7)) == 1){// ==> 'detail/'
        this.currentRouter = route;
        break;
      }else{
        this.currentRouter = {path:'',data:{title:"",isShow:false}};
      }
    }
    return true;
  }

  getCurrentRouter(){
    return this.currentRouter;
  }

  getHomeRouter(){
    return this.appRouting.routes[0];
  }

  goBack(): void {
    this.location.back();
  }
}
