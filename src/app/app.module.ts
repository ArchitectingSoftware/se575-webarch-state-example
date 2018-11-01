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

const appRoutes: Routes = [
  {path: '', component:  MenuComponent},
  {path: 'redux', component: PostListComponent},
  {path: 'properties', component: StateComponent},
  {path: 'services', component: GarageComponent},
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
    GarageComponent
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
