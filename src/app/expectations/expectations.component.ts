import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-expectations',
	templateUrl: './expectations.component.html',
	styleUrls: ['./expectations.component.scss'],
})
export class ExpectationsComponent {
	constructor(private translate: TranslateService) {
		this.translate = translate;
	}
}
