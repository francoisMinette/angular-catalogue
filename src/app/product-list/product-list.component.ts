import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent {
  list;
  selectedGenre = 'All';
  genres = [];

  constructor(private http: HttpClient) {
    this.http.get<any[]>('http://api.tvmaze.com/shows').subscribe(response => {
      response.map(item => {
        const tmpElem = document.createElement('div');

        tmpElem.innerHTML = item.summary;
        item.summary = tmpElem.textContent || tmpElem.innerText || '';
        item.shortSummary = item.summary.length > 100 ? item.summary.slice(0, 100) + '...' : item.summary;

        item.genres.map(genre => {
          if (!this.genres.includes(genre)) {
            this.genres.push(genre);
          }
        });
      });

      this.list = response;
    });
  }

  receiveMessage(event) {
    console.log('in receiveMessage', event);
    this.selectedGenre = event;
  }
}
