import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';


const routes: Routes = [

  // {path:'',pathMatch:'full',redirectTo:'/feature'},

  // {
  //   path:'feature',component:FeaturesComponent,
  // }


  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  //    },

  // {
  //   path:'home',
  //   // component: HomeComponent,
  // },

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
