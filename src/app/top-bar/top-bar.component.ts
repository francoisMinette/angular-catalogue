import { Component, Input, Output, EventEmitter } from '@angular/core';

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
	sortByOptions = ['Rating', 'Premiered'];
	orderByVal = 'desc';
	sortByVal;
	isEndedVal;

	constructor() {}

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

	filterIsEnded(filterVal: any) {
		console.log('filterIsEnded', filterVal);
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
}
