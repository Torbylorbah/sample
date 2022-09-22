import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
    { path: '', component: ClientComponent ,

        children:[
          { path: '', component: HomeComponent },
          { path: 'about', component: AboutComponent },
          { path: 'portfolio', component: PortfolioComponent },
          { path: 'services', component: ServicesComponent }
        ] 
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
