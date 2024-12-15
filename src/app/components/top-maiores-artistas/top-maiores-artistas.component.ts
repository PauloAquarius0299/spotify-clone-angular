import { Component,  OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { IArtista } from '../../Interfaces/IArtista';
import { ArtistaItemImagemComponent } from "../artista-item-imagem/artista-item-imagem.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-maiores-artistas',
  imports: [ArtistaItemImagemComponent, CommonModule],
  templateUrl: './top-maiores-artistas.component.html',
  styleUrl: './top-maiores-artistas.component.scss'
})
export class TopMaioresArtistasComponent implements OnInit {

  artistas: IArtista[] = [];

  constructor(private service: SpotifyService){}

  ngOnInit(): void{
    this.buscarTopArtistas();
  }

  async buscarTopArtistas(){
    this.artistas = await this.service.buscarTopArtistas(5);
    console.log(this.artistas);
  }

}
