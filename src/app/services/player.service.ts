import { BehaviorSubject, Subject } from 'rxjs';
import { IMusicas } from './../Interfaces/IMusicas';
import { Injectable } from '@angular/core';
import { newMusicas } from '../common/factores';
import { SpotifyService } from './spotify.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  musicaAtual = new BehaviorSubject<IMusicas>(newMusicas());
  timerId: any = null;

  constructor(private service: SpotifyService) {
    this.obterMusicaAtual();
   }

  async obterMusicaAtual(){
    clearTimeout(this.timerId);

    //Obtendo a musica
    const musica = await this.service.obterMusicaAtual();
    this.definirMusicaAtual(musica);

    //Causo loop
    this.timerId = setInterval(async () => {
      await this.obterMusicaAtual();
    }, 3000)
  }

  definirMusicaAtual(musica: IMusicas){
    this.musicaAtual.next(musica);
  }
}
