import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  imports: [],
  templateUrl: './button-menu.component.html',
  styleUrl: './button-menu.component.scss'
})
export class ButtonMenuComponent {

  @Input()
  descricao = '';
}
