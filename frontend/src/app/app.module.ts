import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CardsComponent } from './cards/cards.component';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { DeviceManagementComponent } from './device-management/device-management.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { DeviceCreateComponent } from './device-create/device-create.component';
import { ButtonCrudComponent } from './button-crud/button-crud.component';
import { CategoryReadComponent } from './category-read/category-read.component';
import { DeviceReadComponent } from './device-read/device-read.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardsComponent,
    CategoryManagementComponent,
    DeviceManagementComponent,
    CategoryCreateComponent,
    DeviceCreateComponent,
    ButtonCrudComponent,
    CategoryReadComponent,
    DeviceReadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
