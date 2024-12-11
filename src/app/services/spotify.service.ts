import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor() { }

  obterUrlLogin() {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUri = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token`;

    return authEndpoint + clientId + redirectUri + scopes + responseType;
  }
}

