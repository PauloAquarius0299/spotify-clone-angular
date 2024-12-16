import { IMusicas } from "./IMusicas";

export interface IPlaylist {
  id: string;
  nome: string;
  imagemUrl: string;
  musicas?: IMusicas[]
}