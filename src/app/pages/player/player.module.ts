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

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRotas),
    FontAwesomeModule,
    SidebarEsquerdoComponent,
    ButtonMenuComponent,
    UserScrollComponent,
    HomeComponent,
    TopArtistaComponent
],
  declarations: [
    PlayerComponent,
  ],
})
export class PlayerModule { }
