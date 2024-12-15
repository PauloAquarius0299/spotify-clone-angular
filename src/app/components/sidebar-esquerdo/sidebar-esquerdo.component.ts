import { SpotifyService } from './../../services/spotify.service';
import { Component, Input, OnInit } from '@angular/core';
import { ButtonMenuComponent } from "../button-menu/button-menu.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faSearch, faGuitar, faMusic } from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from '../../Interfaces/IPlaylist';
import { UserScrollComponent } from '../user-scroll/user-scroll.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-esquerdo',
  imports: [
    ButtonMenuComponent,
    FontAwesomeModule,
    UserScrollComponent,
    CommonModule
  ],
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

  constructor(
    private service: SpotifyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buscarPlaylists();
  }

  @Input()
  selecionado = false;

  botaoClick(botao: string): void {
    this.menuSelecionado = botao;
    this.router.navigateByUrl('/player/home');
  }

  async buscarPlaylists(): Promise<void> {
    try {
      this.playlists = await this.service.buscarPlaylistUsuario();
    } catch (error) {
      console.error('Erro ao buscar playlists:', error);
    }
  }

}
