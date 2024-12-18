import { Component } from '@angular/core';
import { BuscasRecentesComponent } from '../buscas-recentes/buscas-recentes.component';
import { CommonModule } from '@angular/common';
import { TopArtistaComponent } from "../top-artista/top-artista.component";
import { ArtistaItemImagemComponent } from "../artista-item-imagem/artista-item-imagem.component";
import { TopMaioresArtistasComponent } from '../top-maiores-artistas/top-maiores-artistas.component';
import { PlayCardComponent } from "../play-card/play-card.component";

@Component({
  selector: 'app-sidebar-direito',
  imports: [BuscasRecentesComponent, CommonModule, TopArtistaComponent, TopMaioresArtistasComponent, PlayCardComponent],
  templateUrl: './sidebar-direito.component.html',
  styleUrl: './sidebar-direito.component.scss'
})
export class SidebarDireitoComponent {

  pesquisaRecentes: string[] = [];

  pesquisasRecentes = [
    'top Brasil', 'Rock n Roll', 'Rap Hits', 'MPB classico'
  ]

}
