import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-elfo',
  standalone: true,
  imports: [],
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
