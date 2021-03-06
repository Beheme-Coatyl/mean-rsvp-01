// OLD: src/app/app-routing.module.ts
//      src/app/core/app-routing.module.ts

import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from '../pages/admin/admin.component';
import { AdminGuard } from '../auth/admin.guard';
import { AuthGuard } from '../auth/auth.guard';
import { CallbackComponent } from '../pages/callback/callback.component';
import { CreateEventComponent } from '../pages/admin/create-event/create-event.component';
import { EventComponent } from '../pages/event/event.component';
import { HomeComponent } from '../pages/home/home.component';
import { MyRsvpsComponent } from '../pages/my-rsvps/my-rsvps.component';
import { NgModule } from '@angular/core';
import { UpdateEventComponent } from '../pages/admin/update-event/update-event.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'admin',
    canActivate: [
      AuthGuard,
      AdminGuard
    ],
    children: [
      {
        path: '',
        component: AdminComponent
      },
      {
        path: 'event/new',
        component: CreateEventComponent
      },
      {
        path: 'event/update/:id',
        component: UpdateEventComponent
      }
    ]
  },
  {
    path: 'event/:id',
    component: EventComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'my-rsvps',
    component: MyRsvpsComponent,
    canActivate: [
      AuthGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    AdminGuard
  ]
})
export class AppRoutingModule { }
