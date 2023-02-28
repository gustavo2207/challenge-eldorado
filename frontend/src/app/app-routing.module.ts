import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { CategoryReadComponent } from './category-read/category-read.component';
import { DeviceCreateComponent } from './device-create/device-create.component';
import { DeviceManagementComponent } from './device-management/device-management.component';
import { DeviceReadComponent } from './device-read/device-read.component';

const routes: Routes = [
  { path: '*', redirectTo: '', pathMatch: 'full' },
  {
    path: 'category',
    component: CategoryManagementComponent,
    children: [
      { path: 'createCategory', component: CategoryCreateComponent },
      { path: 'readCategory', component: CategoryReadComponent },
    ],
  },
  {
    path: 'device',
    component: DeviceManagementComponent,
    children: [
      { path: 'createDevice', component: DeviceCreateComponent },
      { path: 'readDevice', component: DeviceReadComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
