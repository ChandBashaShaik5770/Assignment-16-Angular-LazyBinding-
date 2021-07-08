import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './mypipes/search.pipe';
import { SortPipe } from './mypipes/sort.pipe';
import { MycolorDirective } from './directives/mycolor.directive';
import { FormsModule } from '@angular/forms';
import { routingComponents, TechRoutingModule } from './tech-routing/tech-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    SearchPipe,
    SortPipe,
    MycolorDirective,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,TechRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }