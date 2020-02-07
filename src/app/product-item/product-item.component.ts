import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() name: string;
  @Input() rating: number;
  @Input() image: string;
  @Input() summary: string;
  @Input() selectedGenre: string;
  @Input() genres: Array<string>;

  ngOnInit(): void {

  }

  getMyClasses() {
    const classes = {
      hidden: this.selectedGenre !== 'All' && !this.genres.includes(this.selectedGenre)
    };
console.log('in getMyClasses', {selectedGenre : this.selectedGenre, genres : this.genres, res : !this.genres.includes(this.selectedGenre)});
    return classes;
  }
}
