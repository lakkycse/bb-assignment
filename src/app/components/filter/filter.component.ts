import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() inputChange: EventEmitter<any> = new EventEmitter();

  onInputChange(event: Event): void {
    this.inputChange.emit((event.target as HTMLInputElement).value);
    console.log((event.target as HTMLInputElement).value)
  }
}
