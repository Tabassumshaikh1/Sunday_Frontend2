import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

import { ChartsRoutingModule, routedComponents } from './charts-routing.module';
import { ChartjsBarComponent } from './chartjs/chartjs-bar.component';
import { ChartjsLineComponent } from './chartjs/chartjs-line.component';
import { ChartjsPieComponent } from './chartjs/chartjs-pie.component';
import { ChartjsMultipleXaxisComponent } from './chartjs/chartjs-multiple-xaxis.component';
import { ChartjsBarHorizontalComponent } from './chartjs/chartjs-bar-horizontal.component';
import { ChartjsRadarComponent } from './chartjs/chartjs-radar.component';
import { D3BarComponent } from './d3/d3-bar.component';
import { D3LineComponent } from './d3/d3-line.component';
import { D3PieComponent } from './d3/d3-pie.component';
import { D3AreaStackComponent } from './d3/d3-area-stack.component';
import { D3PolarComponent } from './d3/d3-polar.component';
import { D3AdvancedPieComponent } from './d3/d3-advanced-pie.component';
import { EchartsLineComponent } from './echarts/echarts-line.component';
import { EchartsPieComponent } from './echarts/echarts-pie.component';
import { EchartsBarComponent } from './echarts/echarts-bar.component';
import { EchartsMultipleXaxisComponent } from './echarts/echarts-multiple-xaxis.component';
import { EchartsAreaStackComponent } from './echarts/echarts-area-stack.component';
import { EchartsBarAnimationComponent } from './echarts/echarts-bar-animation.component';
import { EchartsRadarComponent } from './echarts/echarts-radar.component';
import { ManageRoleandPermissionComponent } from './manage-roleand-permission/manage-roleand-permission.component';
import { ManageExecutiveuserComponent } from './manage-executiveuser/manage-executiveuser.component';
import { AlllogsComponent } from './alllogs/alllogs.component';
import { LiscenceComponent } from './liscence/liscence.component';
import { ManageliscenceComponent } from './manageliscence/manageliscence.component';
import { DocumentmasterComponent } from './documentmaster/documentmaster.component';
import { PaymentmanagementComponent } from './paymentmanagement/paymentmanagement.component';
import { ManagequeryComponent } from './managequery/managequery.component';
import { LocationregionComponent } from './locationregion/locationregion.component';
import { AccandsettingComponent } from './accandsetting/accandsetting.component';
import { ManagecontentComponent } from './managecontent/managecontent.component';
import { ManagereportComponent } from './managereport/managereport.component';

const components = [
  ChartjsBarComponent,
  ChartjsLineComponent,
  ChartjsPieComponent,
  ChartjsMultipleXaxisComponent,
  ChartjsBarHorizontalComponent,
  ChartjsRadarComponent,
  D3BarComponent,
  D3LineComponent,
  D3PieComponent,
  D3AreaStackComponent,
  D3PolarComponent,
  D3AdvancedPieComponent,
  EchartsLineComponent,
  EchartsPieComponent,
  EchartsBarComponent,
  EchartsMultipleXaxisComponent,
  EchartsAreaStackComponent,
  EchartsBarAnimationComponent,
  EchartsRadarComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    ChartsRoutingModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
    NbCardModule,
  ],
  declarations: [...routedComponents, ...components, ManageRoleandPermissionComponent, ManageExecutiveuserComponent, AlllogsComponent, LiscenceComponent, ManageliscenceComponent, DocumentmasterComponent, PaymentmanagementComponent, ManagequeryComponent, LocationregionComponent, AccandsettingComponent, ManagecontentComponent, ManagereportComponent],
})
export class ChartsModule {}
