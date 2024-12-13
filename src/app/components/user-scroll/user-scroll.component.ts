import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { IUsuario } from '../../Interfaces/IUsuario';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-user-scroll',
  imports: [FontAwesomeModule],
  templateUrl: './user-scroll.component.html',
  styleUrl: './user-scroll.component.scss'
})
export class UserScrollComponent implements OnInit {

  sairIcon = faSignOutAlt;
  usuario: IUsuario = null;

  constructor(private service: SpotifyService){}

  ngOnInit(): void {
    this.usuario = this.service.usuario;
    
  }

  logout(){
    this.service.logout();
  }

}
