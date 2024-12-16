import { Component, OnInit, OnDestroy} from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { IMusicas } from '../../Interfaces/IMusicas';
import { newMusicas } from '../../common/factores';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-play-card',
  imports: [FontAwesomeModule],
  templateUrl: './play-card.component.html',
  styleUrls: ['./play-card.component.scss'] 
})
export class PlayCardComponent implements OnInit, OnDestroy{

  musica: IMusicas = newMusicas();
  subs: Subscription[] = []

  anteriorIcon = faStepBackward;
  proximoIcon = faStepForward;

  constructor(private servicePlayer: PlayerService){};

  ngOnInit(): void{
    this.obterMusicaTocando();
  }

  ngOnDestroy(): void{
    this.subs.forEach(sub => sub.unsubscribe());
  };

  getBackgroundImage(): string {
    return this.musica.album.imagemUrl ? `url(${this.musica.album.imagemUrl})` : '';
  }
  

  obterMusicaTocando(){
    const sub = this.servicePlayer.musicaAtual.subscribe(musicas => {
      console.log(musicas.album.imagemUrl);
      this.musica = musicas;
    });
    

    this.subs.push(sub);
  };

  voltarMusica(){
    this.servicePlayer.voltarMusica();
  };

  proximaMusica(){
    this.servicePlayer.proximaMusica();
  }

}
