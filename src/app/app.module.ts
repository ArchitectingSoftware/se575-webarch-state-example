import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PostListComponent } from './post-list/post-list.component';
import { StateComponent } from './props/state/state.component';
import { StateChildComponent } from './props/state-child/state-child.component';
import { CarComponent } from './service/car/car.component';
import { DriverComponent } from './service/driver/driver.component';
import { GarageComponent } from './service/garage/garage.component';
import { DrivingService } from './service/driving.service';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './reducers/post.reducer';
import { HttpComponent } from './observables/http/http.component';
import { StateUglyComponent } from './props/ugly/state-ugly/state-ugly.component';
import { StateChildUglyComponent } from './props/ugly/state-child-ugly/state-child-ugly.component';
import { DemoComponent } from './observables/demo/demo.component';

const appRoutes: Routes = [
  {path: '', component:  MenuComponent},
  {path: 'redux', component: PostListComponent},
  {path: 'properties/ugly', component: StateUglyComponent},
  {path: 'properties', component: StateComponent},
  {path: 'services', component: GarageComponent},
  {path: 'observables', children: [
    {path: 'http', component: HttpComponent},
    {path: 'demo', component: DemoComponent}
  ]},
  {path: 'obs/http', component: HttpComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PostListComponent,
    StateComponent,
    StateChildComponent,
    CarComponent,
    DriverComponent,
    GarageComponent,
    HttpComponent,
    StateUglyComponent,
    StateChildUglyComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({
      post: postReducer,
    })
  ],
  providers: [DrivingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
