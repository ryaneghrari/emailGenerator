import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';




import { HttpClientModule } from '@angular/common/http';

import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { EmailGeneratorComponent } from './pages/email-generator/email-generator.component';


@NgModule({
  declarations: [
    AppComponent,
    EmailGeneratorComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
    HammerModule,
    NgxJsonLdModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
