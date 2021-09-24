import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterViewRoutingModule } from './master-view-routing.module';
import { MasterViewComponent } from './master-view.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { IgxGridModule, IgxActionStripModule } from "igniteui-angular";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    MasterViewComponent,
    ChildViewComponent
  ],
  imports: [
    CommonModule,
    MasterViewRoutingModule,
    IgxGridModule,
    IgxActionStripModule,
    FormsModule
  ]
})
export class MasterViewModule {
}
