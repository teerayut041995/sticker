import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'blank' , component: BlankComponent },
  { path: 'learning' , component: LearningComponent },
  { path: 'learning/noon' , component: NoonComponent },
  { path: 'learning/noon/hungry' , component: HungryComponent },
  { path: 'learning/sun' , component: SunComponent },
  { path: 'learning/sun/hot' , component: HotComponent },
  { path: 'learning/bathroom' , component: BathroomComponent },
  { path: 'learning/play' , component: PlayComponent },
  { path: 'learning/play/toy' , component: ToyComponent },
  { path: 'learning/happy' , component: HappyComponent },
  { path: 'learning/happy/good' , component: GoodComponent },
  { path: 'learning/happy/like' , component: LikeComponent },
  { path: 'unhappy' , component: UnhappyComponent },
  { path: 'unhappy/bed' , component: BedComponent },
  { path: 'unhappy/bed/tired' , component: TiredComponent },
  { path: 'unhappy/bed/sleep' , component: SleepComponent },
  { path: 'unhappy/sad' , component: SadComponent },
  { path: 'unhappy/sad/dont' , component: DontComponent },
  { path: 'unhappy/sad/angry' , component: AngryComponent },
  { path: 'unhappy/sad/cry' , component: CryComponent },
  { path: 'unhappy/sick' , component: SickComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
