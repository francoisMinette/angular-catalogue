import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  @Input() genres: Array<string>;
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  filterGenre(filterVal: any) {
    this.messageEvent.emit(filterVal);
  }
}
