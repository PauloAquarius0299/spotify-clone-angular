import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  imports: [],
  standalone: true,
  templateUrl: './button-menu.component.html',
  styleUrl: './button-menu.component.scss'
})
export class ButtonMenuComponent {

  @Input()
  descricao = '';

  @Input()
  selecionado = false;

  @Output()
  click = new EventEmitter<void>();

  onClick(){
    this.click.emit();
  }
}
