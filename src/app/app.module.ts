import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ExpectationsComponent } from './expectations/expectations.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

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
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
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
