import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipcontainerComponent } from './components/tooltip/tooltipcontainer/tooltipcontainer.component';
import { TooltipcontentComponent } from './components/tooltip/tooltipcontent/tooltipcontent.component';
import { AssessmentComponent } from './containers/assessment/assessment.component';
import { OnoutsideclickDirective } from './directives/onoutsideclick.directive';

@NgModule({
  declarations: [
    AppComponent,
    TooltipcontainerComponent,
    TooltipcontentComponent,
    AssessmentComponent,
    OnoutsideclickDirective
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
