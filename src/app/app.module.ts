import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { ArrowClockwise, ExclamationCircle, Chat, House, Book, ArrowLeft } from 'ngx-bootstrap-icons';
import { HeaderComponent } from './layouts/header/header.component';
import { BlankComponent } from './pages/blank/blank.component';
import { HomeComponent } from './pages/home/home.component';
import { LearningComponent } from './components/learning/learning.component';
import { NoonComponent } from './components/noon/noon.component';
import { HungryComponent } from './emotions/hungry/hungry.component';
import { SunComponent } from './components/sun/sun.component';
import { HotComponent } from './emotions/hot/hot.component';
import { BathroomComponent } from './emotions/bathroom/bathroom.component';
import { PlayComponent } from './components/play/play.component';
import { ToyComponent } from './emotions/toy/toy.component';
import { UnhappyComponent } from './components/unhappy/unhappy.component';
import { BedComponent } from './components/bed/bed.component';
import { TiredComponent } from './emotions/tired/tired.component';
import { SleepComponent } from './emotions/sleep/sleep.component';
import { HappyComponent } from './components/happy/happy.component';
import { GoodComponent } from './emotions/good/good.component';
import { LikeComponent } from './emotions/like/like.component';
import { SadComponent } from './components/sad/sad.component';
import { DontComponent } from './emotions/dont/dont.component';
import { AngryComponent } from './emotions/angry/angry.component';
import { CryComponent } from './emotions/cry/cry.component';
import { SickComponent } from './emotions/sick/sick.component';

const icons = {
  ArrowClockwise,
  ExclamationCircle,
  Chat,
  House,
  Book,
  ArrowLeft
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlankComponent,
    HomeComponent,
    LearningComponent,
    NoonComponent,
    HungryComponent,
    SunComponent,
    HotComponent,
    BathroomComponent,
    PlayComponent,
    ToyComponent,
    UnhappyComponent,
    BedComponent,
    TiredComponent,
    SleepComponent,
    HappyComponent,
    GoodComponent,
    LikeComponent,
    SadComponent,
    DontComponent,
    AngryComponent,
    CryComponent,
    SickComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxBootstrapIconsModule.pick(icons),
    ButtonsModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
