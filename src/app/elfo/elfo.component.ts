import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SantaComponent } from '../santa/santa.component';

@Component({
  selector: 'app-elfo',
  standalone: true,
  imports: [SantaComponent],
  templateUrl: './elfo.component.html',
  styleUrl: './elfo.component.css'
})
export class ElfoComponent {
  @Input() ordenDeSanta: string = '';
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Tarea Completada');
  }
}