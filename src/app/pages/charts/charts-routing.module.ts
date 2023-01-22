import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartsComponent } from './charts.component';
import { EchartsComponent } from './echarts/echarts.component';
import { D3Component } from './d3/d3.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { LiscenceComponent } from './liscence/liscence.component';
import { ManageExecutiveuserComponent } from './manage-executiveuser/manage-executiveuser.component';
import { ManageRoleandPermissionComponent } from './manage-roleand-permission/manage-roleand-permission.component';
import { AlllogsComponent } from './alllogs/alllogs.component';
import { ManageliscenceComponent } from './manageliscence/manageliscence.component';
import { DocumentmasterComponent } from './documentmaster/documentmaster.component';
import { PaymentmanagementComponent } from './paymentmanagement/paymentmanagement.component';
import { LocationregionComponent } from './locationregion/locationregion.component';
import { AccandsettingComponent } from './accandsetting/accandsetting.component';
import { ManagereportComponent } from './managereport/managereport.component';
import { ManagecontentComponent } from './managecontent/managecontent.component';







const routes: Routes = [{
  path: '',
  component: ChartsComponent,
  children: [{
    path: 'echarts',
    component: EchartsComponent,
  }, {
    path: 'd3',
    component: D3Component,
  },{
    path: 'liscence',
    component: LiscenceComponent,
  
  },
  {
    path: 'manage-executiveuser',
    component: ManageExecutiveuserComponent,
  
  },{
    path: 'manage-roleand-permission',
    component: ManageRoleandPermissionComponent,
  
  },{
    path:'manageliscence',
    component:ManageliscenceComponent
  },{
    path:'documentmaster',
    component:DocumentmasterComponent
  },{
    path:'managereport'
    ,component:ManagereportComponent
  }
  ,{
    path:'managecontent',
    component:ManagecontentComponent

  },
  {
    path:'accandsetting',
    component:AccandsettingComponent
  },
  {
    path:'locationregion',
    component:LocationregionComponent
  },
  {
    path:'alllogs',
    component:AlllogsComponent
  },{
path:'paymentmanagement',
component:PaymentmanagementComponent
  },
  {
    path: 'chartjs',
    component: ChartjsComponent,
  },
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule { }

export const routedComponents = [
  ChartsComponent,
  EchartsComponent,
  LiscenceComponent,
  D3Component,
  ChartjsComponent,
];
