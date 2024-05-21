import { Component } from '@angular/core';
import { ElfoComponent } from '../elfo/elfo.component';

@Component({
  selector: 'app-santa',
  standalone: true,
  imports: [ElfoComponent],
  templateUrl: './santa.component.html',
  styleUrl: './santa.component.css'
})
export class SantaComponent {
[x: string]: any;
  ordenDeSanta: string = 'Preparar Osos de Peluche';
  elfoMessage = '';
  receiveMessage($event: string) {
    this.elfoMessage = $event;
  }

}
