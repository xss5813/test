import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectPage } from './project';

import {ProjectService} from '../../business/project.service';
@NgModule({
  declarations: [
    ProjectPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectPage),
  ],
  providers:[ProjectService]
})
export class ProjectPageModule {}
