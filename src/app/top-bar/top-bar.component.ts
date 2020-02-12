import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-top-bar',
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
	@Input() genres: Array<string>;
	@Output() selectGenreEvent = new EventEmitter<string>();
	@Output() sortByEvent = new EventEmitter<string>();
	@Output() orderByEvent = new EventEmitter<string>();
	@Output() filterIsEndedEvent = new EventEmitter<string>();
	@Output() searchEvent = new EventEmitter<string>();
	sortByOptions = ['Rating', 'Premiered'];
	orderByVal = 'desc';
	sortByVal;
	isEndedVal;
	searchFunc;

	constructor(private translate: TranslateService) {
		this.translate = translate;
	}

	filterGenre(filterVal: any) {
		this.selectGenreEvent.emit(filterVal);
	}

	sortBy(sortingVal: any) {
		if (this.sortByVal !== sortingVal) {
			this.sortByVal = sortingVal;
			this.sortByEvent.emit(sortingVal);
		}
	}

	orderBy(orderingVal: any) {
		if (this.orderByVal !== orderingVal) {
			this.orderByVal = orderingVal;
			this.orderByEvent.emit(orderingVal);
		}
	}

	// TODO
	filterIsEnded(filterVal: any) {
		if (this.isEndedVal !== filterVal) {
			this.isEndedVal = filterVal;
			this.filterIsEndedEvent.emit(filterVal);
		}
	}

	getMyClasses(orderByVal) {
		const classes = {
			selected: this.orderByVal === orderByVal,
			hidden: !this.sortByVal || this.sortByVal === '0',
		};

		return classes;
	}

	searchShow(inputValue) {
		console.log('in searchShow', inputValue);
		if (this.searchFunc) {
			clearTimeout(this.searchFunc);
		}

		// Will search 200ms after the last keyup event
		this.searchFunc = setTimeout(() => {
			this.searchEvent.emit(inputValue);
		}, 200);
	}
}
