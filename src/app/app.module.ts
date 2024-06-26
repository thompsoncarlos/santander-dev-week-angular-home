import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';

import { SvgComponentsModule } from './modules/svg-components.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardBoxComponent } from './components/card-box/card-box.component';
import { HeaderComponent } from './components/header/header.component';
import { AmountBoxComponent } from './components/amount-box/amount-box.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		CardBoxComponent,
		HeaderComponent,
		AmountBoxComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SvgComponentsModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
