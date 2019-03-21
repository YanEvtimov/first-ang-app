import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { AchievementsComponent } from './main/achievements/achievements.component';
import { SkillsComponent } from './main/skills/skills.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { FormComponent } from './main/form/form.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { SubscriptionComponent } from './main/form/subscription/subscription.component';
import { StoreDataService } from './services/server.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    WelcomeComponent,
    AchievementsComponent,
    SkillsComponent,
    ProjectsComponent,
    FormComponent,
    ContactsComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StoreDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
