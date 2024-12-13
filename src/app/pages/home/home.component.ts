import { Component } from '@angular/core';
import { TopArtistaComponent } from "../../components/top-artista/top-artista.component";

@Component({
  selector: 'app-home',
  imports: [TopArtistaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
