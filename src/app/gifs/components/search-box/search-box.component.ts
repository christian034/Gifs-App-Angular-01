import { Component,ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar: </h5>
    <input type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    >
  `
})

// Componente para el input de búsqueda
export class SearchBoxComponent {
  @ViewChild( 'txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  //public TagInput!: ElementRef<HTMLInputElement>;
  // Evento para buscar con enter
  constructor(private GifsService:GifsService){}
  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    this.GifsService.searchtag(newTag);
    this.tagInput.nativeElement.value = ''; // Resetear el input al presionar enter
  }
}
