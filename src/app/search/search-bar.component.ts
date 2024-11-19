import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  // Promenljiva za unos pretrage
  searchCriteria: string = '';

  // Događaj koji emituje kriterijum pretrage
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  // Funkcija koja se poziva pri pretrazi
  onSearch(): void {
    this.search.emit(this.searchCriteria);
  }
}
