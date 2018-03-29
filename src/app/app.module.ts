import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ChangeTextDirective } from './change-text.directive';
import {SqrtPipe } from './app.sqrt';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ChangeTextDirective,
	SqrtPipe,
	ProfileComponent,
  ],
  imports: [
    BrowserModule,
	FormsModule,
	RouterModule.forRoot([
	{
		path:'new-cmp',
		component:ProfileComponent
	}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
