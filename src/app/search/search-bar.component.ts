import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchCriteria: string = ''; // Kriterijum pretrage

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSearch(): void {
    console.log('Search triggered with:', this.searchCriteria);
    if (this.searchCriteria.trim() !== '') { // Proveri da li je unos validan
      this.search.emit(this.searchCriteria); // Emituj unos
    }
  }

}

