import { IArtista } from "../Interfaces/IArtista";
import { IMusicas } from "../Interfaces/IMusicas";
import { IPlaylist } from "../Interfaces/IPlaylist";

export function newArtista(): IArtista {
  return {
    id: '',
    imagemUrl: '',
    nome: '',
    musica: [],
  }
}

export function newMusicas(): IMusicas {
  return {
    id: '',
    album:{ 
      id: '',
      imagemUrl: '',
      nome: ''
    },
    artistas: [],
    tempo: '',
    titulo: ''
  }
};

export function newPlaylist(): IPlaylist{
  return {
    id: '',
    imagemUrl: '',
    nome: '',
    musicas: []
  }
}