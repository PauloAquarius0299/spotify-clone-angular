import { Component, OnInit } from '@angular/core';
import { TopArtistaComponent } from "../../components/top-artista/top-artista.component";
import { SidebarDireitoComponent } from '../../components/sidebar-direito/sidebar-direito.component';
import { IMusicas } from '../../Interfaces/IMusicas';
import { SpotifyService } from '../../services/spotify.service';
import { CommonModule } from '@angular/common';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home',
  imports: [TopArtistaComponent, SidebarDireitoComponent, CommonModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  musicas: IMusicas[] = [];

  playIcon = faPlay

  constructor(private service: SpotifyService){}

  ngOnInit(): void {
    this.obterMusicas();
  }
  

  async obterMusicas(){
    this.musicas = await this.service.buscarMusicas();
    console.log(this.musicas);
  }

  obterArtistas(musica: IMusicas){
    return musica.artistas.map(artistas => artistas.nome).join(', ');
  }

  async executarMusica(musica: IMusicas){
    await this.service.executarMusica(musica.id);
  }

}
