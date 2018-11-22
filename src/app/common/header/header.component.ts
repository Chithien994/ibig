/*
ChiThienTCN
Header Component
*/
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { AppRoutingModule } from '../../app-routing.module';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(
    private appComponent: AppComponent,
    public appRouting: AppRoutingModule,
    private router: Router
    ) {}

  ngOnInit() {}

  currentRouter: Route;

  /**
   * Get app title
   * 
   * @returns title
   */
  getAppTitle(): string{
    return this.appComponent.title
  }

  /**
   * Set current router
   * 
   * @returns only true
   */
  setCurrentRouter(): boolean{

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

  /**
   * Get current router
   * 
   * @returns Route
   */
  getCurrentRouter(): Route{
    return this.currentRouter;
  }

  /**
   * Get home router
   * 
   * @returns Route
   */
  getHomeRouter(): Route{
    return this.appRouting.routes[0];
  }
}
