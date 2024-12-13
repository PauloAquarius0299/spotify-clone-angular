import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login.module.ts',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: false
})
export class LoginComponent implements OnInit {

  constructor(
    private spotifyService: SpotifyService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.verificarTokenUrlCallback();
  }

  verificarTokenUrlCallback() {
    const token = this.spotifyService.obterTokenUrlCallback();
    if(!!token){
      this.spotifyService.definirAccessToken(token);
      this.router.navigate(['/player/home'])
    } 
  }

  abrirPaginaLogin(){
    console.log(this.spotifyService.obterUrlLogin())
  }

}
