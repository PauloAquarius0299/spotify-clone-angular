import { IMusicas } from './../../Interfaces/IMusicas';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { newMusicas } from '../../common/factores';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { BannerComponent } from '../../components/banner/banner.component';
import { SidebarDireitoComponent } from '../../components/sidebar-direito/sidebar-direito.component';
import { PlayerService } from '../../services/player.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-musicas',
  imports: [
    FontAwesomeModule, 
    BannerComponent, 
    SidebarDireitoComponent,
    CommonModule,
  ],
  templateUrl: './lista-musicas.component.html',
  styleUrl: './lista-musicas.component.scss'
})
export class ListaMusicasComponent implements OnInit, OnDestroy {

  bannerImagemUrl = '';
  bannerTexto = '';

  musicas: IMusicas[] = [];
  musicaAtual: IMusicas = newMusicas();

  playIcon = faPlay;

  title = ''

  subs: Subscription[] = []

  constructor(
    private activedRoute: ActivatedRoute,
    private service: SpotifyService,
    private servicePlayer: PlayerService
  ){}

  ngOnInit(): void{
    this.obterMusicas();
  }

  ngOnDestroy(): void{
    this.subs.forEach(sub => sub.unsubscribe());
  }

  obterMusicaAtual(){
    const sub = this.servicePlayer.musicaAtual.subscribe(musica => {
      this.musicaAtual = musica;
    });
    this.subs.push(sub);
  }

  obterMusicas(){
    const sub = this.activedRoute.paramMap.subscribe(async params => {
      const tipo = params.get('tipo');
      const id = params.get('id');
      await this.obterDadosPagina(tipo,id);
    })

    this.subs.push(sub);
  }

  async obterDadosPagina(tipo: string, id: string){
    if(tipo === 'playlist')
      await this.obterDadosPlaylist(id);
    else 
      await this.obterDadosArtista(id)
  }

  async obterDadosPlaylist(playlistId: string){
    const playlistMusicas = await this.service.buscarMusicasPlaylist(playlistId);
    this.definirDadosPagina(playlistMusicas.nome, playlistMusicas.imagemUrl, playlistMusicas.musicas)
    this.title = 'Musicas Playlist: ' +playlistMusicas.nome;
  }

  async obterDadosArtista(artistaId: string){

  }

  definirDadosPagina(bannerTexto: string, bannerImagem: string, musicas: IMusicas[]){
    this.bannerImagemUrl = bannerImagem;
    this.bannerTexto = bannerTexto;
    this.musicas = musicas;
  }

  async executarMusica(musica: IMusicas){
    await this.service.executarMusica(musica.id);
    this.servicePlayer.definirMusicaAtual(musica);
  }

  obterArtistas(musica: IMusicas){
    return musica.artistas.map(artistas => artistas.nome).join(', ');
  }

}
