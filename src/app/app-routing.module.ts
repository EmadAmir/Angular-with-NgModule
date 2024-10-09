import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveSampleComponent } from './directive-sample/directive-sample.component';
import { AboutAngularComponent } from './Components/About/about-angular.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { pipe } from 'rxjs';
import { PipeComponent } from './pipe/pipe.component';
import { PersonalComponent } from './pipe/personal/personal.component';
import { EducationComponent } from './pipe/education/education.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { ObservableSampleComponent } from './observable-sample/observable-sample.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ParentComponent } from './hooks/parent/parent.component';

const routes: Routes = [
  { path: 'directive-sample/:id', component: DirectiveSampleComponent },
  { path: 'Hooks', component: ParentComponent },
  { path: 'Template-driven-form', component: TemplateDrivenFormComponent },
  { path: 'databinding', component: DatabindingComponent },
  { path: 'directive-sample', component: DirectiveSampleComponent },
  { path: 'observable', component: ObservableSampleComponent },
  { path: 'about-angular', component: AboutAngularComponent },
  { path: 'datasharing', component: CustomerAddComponent },
  {
    path: 'pipes',
    component: PipeComponent,
    children: [
      { path: 'personal', component: PersonalComponent },
      { path: 'education', component: EducationComponent },
    ],
  },
  { path: '**', component: DatabindingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
