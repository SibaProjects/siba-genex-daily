import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './order-list/order-list.component';  
import { OrdersService } from "./shared/orders.service";
import { ReactiveFormsModule } from "@angular/forms";
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { QuestionsComponent } from './questions/questions.component';
import { AnswersComponent } from './answers/answers.component';
import { ArchwizardModule } from 'angular-archwizard';
import {MatSliderModule} from '@angular/material/slider';


import {MatTableModule} from '@angular/material/table'; 
import {MatRadioModule} from '@angular/material/radio'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import {MatSelectModule} from '@angular/material/select'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
  import { NgxStepperModule } from 'ngx-stepper';
import {MatStepperModule, MatInputModule, MatButtonModule} from '@angular/material'
import {FormsModule, } from '@angular/forms';
import {MatListModule} from '@angular/material/list'; 
import {MatDialogModule} from '@angular/material/dialog';

import {MatFormFieldModule} from '@angular/material/form-field';
import { LogoutComponent } from './logout/logout.component'; 
@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    LoginComponent,
    OrdersComponent,
    OrderListComponent,
    QuestionsComponent,
    AnswersComponent,
    LogoutComponent
  ],
  imports: [
AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
    ArchwizardModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule, MatInputModule, MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
        NgxStepperModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSelectModule,
        MatSliderModule,
        MatListModule,
        MatFormFieldModule,
        MatDialogModule,
        MatTableModule
          
  ],
  providers: [OrdersService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
