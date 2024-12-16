import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRotas } from './player.routes';
import { SidebarEsquerdoComponent } from '../../components/sidebar-esquerdo/sidebar-esquerdo.component';
import { ButtonMenuComponent } from '../../components/button-menu/button-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserScrollComponent } from '../../components/user-scroll/user-scroll.component';
import { HomeComponent } from "../home/home.component";
import { TopArtistaComponent } from '../../components/top-artista/top-artista.component';
import { SidebarDireitoComponent } from '../../components/sidebar-direito/sidebar-direito.component';
import { BuscasRecentesComponent } from '../../components/buscas-recentes/buscas-recentes.component';
import { FormsModule } from '@angular/forms';
import { ArtistaItemImagemComponent } from '../../components/artista-item-imagem/artista-item-imagem.component';
import { TopMaioresArtistasComponent } from '../../components/top-maiores-artistas/top-maiores-artistas.component';
import { PlayCardComponent } from '../../components/play-card/play-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRotas),
    FontAwesomeModule,
    SidebarEsquerdoComponent,
    ButtonMenuComponent,
    UserScrollComponent,
    HomeComponent,
    TopArtistaComponent,
    SidebarDireitoComponent,
    BuscasRecentesComponent,
    ArtistaItemImagemComponent,
    TopMaioresArtistasComponent,
    PlayCardComponent,
    FormsModule
],
  declarations: [
    PlayerComponent,
  ],
})
export class PlayerModule { }
