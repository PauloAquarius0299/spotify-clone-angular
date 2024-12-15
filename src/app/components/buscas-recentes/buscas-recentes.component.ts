import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscas-recentes',
  imports: [CommonModule, FormsModule],
  templateUrl: './buscas-recentes.component.html',
  styleUrl: './buscas-recentes.component.scss'
})
export class BuscasRecentesComponent {
  //pesquisaRecentes: string[] = []; 

  pesquisaRecentes = ['Top Brasil', 'Top Global', 'Rock n roll play', 'Hap Nacional Hits', 'MBP Brasil'];

  constructor() {
   
    this.pesquisaRecentes = ['Top Brasil', 'Top Global', 'Rock n roll play', 'Hap Nacional Hits', 'MBP Brasil'];
  }

  campoPesquisa = ''

  definirPesquisa(pesquisa:string){
    this.campoPesquisa = pesquisa;
  }

  buscar(){
    console.log('buscando...', this.campoPesquisa);
  }
}
