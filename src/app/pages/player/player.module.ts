import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRotas } from './player.routes';
import { SidebarEsquerdoComponent } from '../../components/sidebar-esquerdo/sidebar-esquerdo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRotas),
    SidebarEsquerdoComponent
  ],
  declarations: [PlayerComponent]
})
export class PlayerModule { }
