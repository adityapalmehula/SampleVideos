import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DisplayComponent } from './display/display.component';
import { FooterComponent } from './footer/footer.component';
import { MessageService } from './services/common/message.service';
import { ErrorService } from './services/common/error.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [MessageService,ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }