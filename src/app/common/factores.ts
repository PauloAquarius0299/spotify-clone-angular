import { IArtista } from "../Interfaces/IArtista";
import { IMusicas } from "../Interfaces/IMusicas";

export function newArtista(): IArtista {
  return {
    id: '',
    imagemUrl: '',
    nome: '',
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
}