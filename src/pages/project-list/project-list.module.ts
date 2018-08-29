import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectListPage } from './project-list';

import {ProjectService} from '../../business/project.service';
@NgModule({
  declarations: [
    ProjectListPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectListPage),
  ],
  providers:[ProjectService]
})
export class ProjectListPageModule {}
