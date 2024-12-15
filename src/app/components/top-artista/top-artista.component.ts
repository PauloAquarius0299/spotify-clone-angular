import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { IArtista } from '../../Interfaces/IArtista';
import { newArtista } from '../../common/factores';

@Component({
  selector: 'app-top-artista',
  imports: [],
  templateUrl: './top-artista.component.html',
  styleUrl: './top-artista.component.scss'
})
export class TopArtistaComponent implements OnInit {

  artistas: IArtista = newArtista();

  constructor(private service: SpotifyService){}

  ngOnInit(): void {
    this.buscarArtista();
  }

  async buscarArtista(){
    const artistas = await this.service.buscarTopArtistas(1);

    if(!!artistas)
      this.artistas = artistas.pop();
  }

}
