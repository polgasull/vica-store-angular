import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';
import { RouterModule, Routes, NavigationEnd } from "@angular/router";

import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

import { VicaApiService } from './services/vica-api.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { EditProjectComponent } from './edit-project/edit-project.component'

export const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'projects', component: ProjectsComponent},
      { path: 'projects/new', component: AddProjectComponent},
      { path: 'projects/:id', component: ProjectDetailsComponent},
      { path: '', component: HomeComponent},
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    NavbarComponent,
    FooterComponent,
    AddProjectComponent,
    LayoutComponent,
    HomeComponent,
    EditProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [VicaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
