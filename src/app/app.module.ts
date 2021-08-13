import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {StoreModule} from '@ngrx/store';
import { ReactiveComponentModule } from '@ngrx/component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsStylesComponent } from './forms-styles/forms-styles.component';
import { FormsConstructorComponent } from './forms-constructor/forms-constructor.component';
import { LoginComponent } from './login/login.component';
import { FormsElementsComponent } from './forms-elements/forms-elements.component';
import { MainComponent } from './main/main.component';


import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/services/auth.guard';
import { AuthInterceptor } from './shared/auth.interceptor';
import {metaReducers, reducers} from './reducers';
import { environment } from '../environments/environment';
import { AboutProgramComponent } from './about-programm/about-program.component';



const INTERCEPTOR_PROVIDER: Provider = {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AuthInterceptor
};
@NgModule({
    declarations: [
        AppComponent,
        FormsStylesComponent,
        FormsConstructorComponent,
        FormsElementsComponent,
        HeaderComponent,
        LoginComponent,
        MainComponent,
        AboutProgramComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CdkAccordionModule,
        DragDropModule,
        HttpClientModule,
        FormsModule,
      ReactiveComponentModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: 'login', component: LoginComponent },
            { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
            { path: '', component: AboutProgramComponent }
        ]),
      StoreModule.forRoot(reducers, { metaReducers}),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    ],
    providers: [AuthService, AuthGuard, INTERCEPTOR_PROVIDER],
    bootstrap: [AppComponent]
})
export class AppModule { }
