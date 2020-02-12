import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-product-item',
	templateUrl: './product-item.component.html',
	styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
	@Input() name: string = '';
	@Input() rating: number = null;
	@Input() image: string = '';
	@Input() summary: string = '';
	@Input() selectedGenre: string = '';
	@Input() premiered: string = '';
	@Input() search: string = '';
	@Input() genres: Array<string> = [];

	ngOnInit(): void {}

	getMyClasses() {
		const classes = {
			hidden:
				(this.selectedGenre !== 'All' && !this.genres.includes(this.selectedGenre)) ||
				this.isNotFound(),
		};

		return classes;
	}

	isNotFound() {
		return this.search.length && !this.name.includes(this.search);
	}

	getRating() {
		let ratingString = '';

		if (this.rating) {
			ratingString = `(${this.rating})`;
		}

		return ratingString;
	}

	getName() {
		const { search, name } = this;
		let nameString = name;

		if (search.length && !this.getMyClasses().hidden) {
			const startIndex = name.indexOf(search);
			const endIndex = startIndex + search.length;
			const prefix = name.slice(0, startIndex);
			const suffix = name.slice(endIndex);

			nameString = `${prefix}<b>${search}</b>${suffix}`;
		}

		return nameString;
	}
}
