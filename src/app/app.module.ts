import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';


const pages = [{
  path: '',
  component: HomePageComponent
}, {
  path: 'projects',
  component: ProjectsPageComponent
}];



@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(pages)
  ],
  declarations: [ 
    AppComponent, HeaderComponent, FooterComponent, HomePageComponent, ProjectsPageComponent, 
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
