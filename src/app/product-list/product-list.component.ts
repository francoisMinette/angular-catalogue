import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
	list;
	orderBy = 'desc';
	selectedGenre = 'All';
	sortBy = '0';
	isEnded = 2;
	genres = [];
	isLoading = true;

	constructor(private http: HttpClient) {
		const prepareData = data => {
			data.map(item => {
				const tmpElem = document.createElement('div');

				tmpElem.innerHTML = item.summary;
				item.summary = tmpElem.textContent || tmpElem.innerText || '';
				item.shortSummary =
					item.summary.length > 100 ? item.summary.slice(0, 100) + '...' : item.summary;

				item.genres.map(genre => {
					if (!this.genres.includes(genre)) {
						this.genres.push(genre);
					}
				});
			});

			this.list = data;
			this.isLoading = false;
		};

		this.http.get<any[]>('http://api.tvmaze.com/shows').subscribe(
			response => {
				prepareData(response);
			},
			error => {
				console.error(error);

				this.http.get<any[]>('assets/shows.json').subscribe(response => {
					prepareData(response);
				});
			}
		);
	}

	loadingContainerClasses() {
		const classes = {
			hidden: !this.isLoading,
		};

		return classes;
	}

	ListWrapperClasses() {
		const classes = {
			hidden: this.isLoading,
		};

		return classes;
	}

	orderList() {
		this.list = this.list.sort((a, b) => {
			let res = 0;

			switch (this.sortBy) {
				case 'Premiered': {
					const aDate = new Date(a.premiered).getTime();
					const bDate = new Date(b.premiered).getTime();

					res = this.orderBy === 'desc' ? bDate - aDate : aDate - bDate;
					break;
				}
				case 'Rating': {
					res =
						this.orderBy === 'desc'
							? b.rating.average - a.rating.average
							: a.rating.average - b.rating.average;
					break;
				}
			}

			return res;
		});

		console.log('updateSortBy', this.sortBy, this.list, this.orderBy);
	}

	updateSortBy(event) {
		this.sortBy = event;
		this.orderList();
	}

	updateOrderBy(event) {
		this.orderBy = event;
		this.orderList();
	}

	updateSelectedGenre(event) {
		this.selectedGenre = event;
	}

	updateIsEnded(event) {
		this.isEnded = event;
	}
}
