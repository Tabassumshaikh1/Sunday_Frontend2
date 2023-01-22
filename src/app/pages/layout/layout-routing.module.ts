import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { Tab1Component, Tab2Component, TabsComponent } from './tabs/tabs.component';
import { AccordionComponent } from './accordion/accordion.component';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { ListComponent } from './list/list.component';
import { StepperComponent } from './stepper/stepper.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { Accordion1Component } from './accordion1/accordion1.component';
import { EditroleComponent } from './editrole/editrole.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'stepper',
      component: StepperComponent,
    },
    {
      path: 'edit/:id',
      component: EditComponent,
    },
    {
      path:'editrole',
      component:EditroleComponent
    },
    {
      path: 'view/:id',
      component: ViewComponent,
    },
    {
      path:'accordion1',
      component:Accordion1Component

    },

    {
      path: 'list',
      component: ListComponent,
    },
    {
      path: 'infinite-list',
      component: InfiniteListComponent,
    },
    // {
    //   path: 'accordion',
    //   component: AccordionComponent,
    // },
    {
      path: 'tabs',
      component: TabsComponent,
      children: [
        {
          path: '',
          redirectTo: 'tab1',
          pathMatch: 'full',
        },
        {
          path: 'tab1',
          component: Tab1Component,
        },
        {
          path: 'tab2',
          component: Tab2Component,
        },
      ],
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {
}
