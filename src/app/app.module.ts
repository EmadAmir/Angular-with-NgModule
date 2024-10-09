import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveSampleComponent } from './directive-sample/directive-sample.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { FavsDirective } from './custom/favs.directive';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutAngularComponent } from './Components/About/about-angular.component';
import { PipeComponent } from './pipe/pipe.component';
import { PersonalComponent } from './pipe/personal/personal.component';
import { EducationComponent } from './pipe/education/education.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { ObservableSampleComponent } from './observable-sample/observable-sample.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './hooks/parent/parent.component';
import { ChildComponent } from './hooks/child/child.component';
import { ProjectionComponent } from './hooks/projection/projection.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveSampleComponent,
    DatabindingComponent,
    FavsDirective,
    NavbarComponent,
    AboutAngularComponent,
    PipeComponent,
    PersonalComponent,
    EducationComponent,
    CustomerAddComponent,
    CustomerListComponent,
    ObservableSampleComponent,
    TemplateDrivenFormComponent,
    ParentComponent,
    ChildComponent,
    ProjectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
