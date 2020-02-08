import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ExpectationsComponent } from './expectations/expectations.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		TopBarComponent,
		ProductListComponent,
		ProductItemComponent,
		HeaderComponent,
		AboutUsComponent,
		ExpectationsComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		RouterModule.forRoot([
			{ path: '', component: ProductListComponent },
			{ path: 'about-us', component: AboutUsComponent },
			{ path: 'expectations', component: ExpectationsComponent },
		]),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
