import { IArtista } from "../Interfaces/IArtista";
import { IPlaylist } from "../Interfaces/IPlaylist";
import { IUsuario } from "../Interfaces/IUsuario";

export function SpotifyUserParaUsuario(user: SpotifyApi.CurrentUsersProfileResponse): IUsuario {
  return{
    id: user.id,
    nome: user.display_name,
    imagemUrl: user.images.pop().url
  }
}

export function SpotifyPlaylistParaPlalist(playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist {
  return {
    id: playlist.id,
    nome: playlist.name,
    imagemUrl: playlist.images.length > 0 ? playlist.images[playlist.images.length - 1].url : ''
  };
}

export function SpotifyArtistaParaArtista(spotifyArtista: SpotifyApi.ArtistObjectFull): IArtista {
  return {
    id: spotifyArtista.id,
    imagemUrl: spotifyArtista.images.sort((a,b) => a.width - b.width).pop().url,
    nome: spotifyArtista.name
  }
}