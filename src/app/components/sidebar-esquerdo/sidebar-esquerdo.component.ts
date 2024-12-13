import { Component, Input } from '@angular/core';
import { ButtonMenuComponent } from "../button-menu/button-menu.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faSearch, faGuitar, faMusic } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar-esquerdo',
  imports: [ButtonMenuComponent, FontAwesomeModule],
  standalone: true,
  templateUrl: './sidebar-esquerdo.component.html',
  styleUrl: './sidebar-esquerdo.component.scss'
})
export class SidebarEsquerdoComponent {

  menuSelecionado = 'Home';

  homeIcon = faHome;
  pesquisarIcon = faSearch;
  artistaIcon = faGuitar;
  playlistIcon = faMusic;

  @Input()
  selecionado = false;

  botaoClick(botao: string){
    this.menuSelecionado = botao;
  }

}
