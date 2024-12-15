import { Component, OnDestroy, OnInit } from '@angular/core';
import { TopArtistaComponent } from "../../components/top-artista/top-artista.component";
import { SidebarDireitoComponent } from '../../components/sidebar-direito/sidebar-direito.component';
import { IMusicas } from '../../Interfaces/IMusicas';
import { SpotifyService } from '../../services/spotify.service';
import { CommonModule } from '@angular/common';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PlayerService } from '../../services/player.service';
import { newMusicas } from '../../common/factores';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [
    TopArtistaComponent, 
    SidebarDireitoComponent, 
    CommonModule, 
    FontAwesomeModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  musicas: IMusicas[] = [];
  musicaAtual: IMusicas = newMusicas();

  subs: Subscription[] = [];

  playIcon = faPlay

  constructor(
    private service: SpotifyService,
    private servicePlayer: PlayerService
  ){}

  ngOnInit(): void {
    this.obterMusicas();
    this.obterMusicaAtual();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
  async obterMusicas(){
    this.musicas = await this.service.buscarMusicas();
  }

  obterMusicaAtual(){
    const sub = this.servicePlayer.musicaAtual.subscribe(musica => {
      this.musicaAtual = musica;
    });

    this.subs.push(sub);
  }

  obterArtistas(musica: IMusicas){
    return musica.artistas.map(artistas => artistas.nome).join(', ');
  }

  async executarMusica(musica: IMusicas){
    await this.service.executarMusica(musica.id);
    this.servicePlayer.definirMusicaAtual(musica);
  }

}
