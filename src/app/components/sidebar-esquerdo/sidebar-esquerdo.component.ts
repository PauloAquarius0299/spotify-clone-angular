import { SpotifyService } from './../../services/spotify.service';
import { Component, Input, OnInit } from '@angular/core';
import { ButtonMenuComponent } from "../button-menu/button-menu.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faSearch, faGuitar, faMusic } from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from '../../Interfaces/IPlaylist';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-esquerdo',
  imports: [ButtonMenuComponent, FontAwesomeModule, CommonModule],
  standalone: true,
  templateUrl: './sidebar-esquerdo.component.html',
  styleUrls: ['./sidebar-esquerdo.component.scss']
})
export class SidebarEsquerdoComponent implements OnInit {

  menuSelecionado = 'Home';
  playlists: IPlaylist[] = [];

  homeIcon = faHome;
  pesquisarIcon = faSearch;
  artistaIcon = faGuitar;
  playlistIcon = faMusic;

  constructor(private service: SpotifyService) {}

  ngOnInit(): void {
    this.buscarPlaylists();
  }

  @Input()
  selecionado = false;

  botaoClick(botao: string): void {
    this.menuSelecionado = botao;
  }

  async buscarPlaylists(): Promise<void> {
    try {
      this.playlists = await this.service.buscarPlaylistUsuario();
      console.log(this.playlists);
    } catch (error) {
      console.error('Erro ao buscar playlists:', error);
    }
  }

}
