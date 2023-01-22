import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtraComponentsComponent } from './extra-components.component';
import { AlertComponent } from './alert/alert.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { CalendarKitFullCalendarShowcaseComponent } from './calendar-kit/calendar-kit.component';
import { AssignfieldexeComponent } from './assignfieldexe/assignfieldexe.component';
import { AssignreqComponent } from './assignreq/assignreq.component';
import { CourierservComponent } from './courierserv/courierserv.component';
import { ManagestatusComponent } from './managestatus/managestatus.component';
import { MyaccComponent } from './myacc/myacc.component';
import { PastreqComponent } from './pastreq/pastreq.component';
import { PaymentComponent } from './payment/payment.component';
import { QueryComponent } from './query/query.component';

QueryComponent







const routes: Routes = [{
  path: '',
  component: ExtraComponentsComponent,
  children: [
    {
      path: 'calendar',
      component: CalendarComponent,
    },
    {
      path: 'progress-bar',
      component: ProgressBarComponent,
    },{
path:'myacc',
component:MyaccComponent
    },
    
    {
      path: 'spinner',
      component: SpinnerComponent,
    },{
      path:'payment',
      component:PaymentComponent
    },
    {
      path: 'alert',
      component: AlertComponent,
    },
    {
      path: 'calendar-kit',
      component: CalendarKitFullCalendarShowcaseComponent,
    },
    {
      path: 'chat',
      component: ChatComponent,
    },
    {
      path:'assignfieldexe',
      component:AssignfieldexeComponent
    },
    {
      path:'assignreq',
      component:AssignreqComponent
    },{
      path:'query',
      component:QueryComponent
    }
    ,
    {
path:'courierserv'
,component:CourierservComponent
    },
    {
path:'managestatus',
component:ManagestatusComponent
    },{
path:'myacc',
component:MyaccComponent
    },{
    path:'pastreq',
    component:PastreqComponent
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtraComponentsRoutingModule {
}
