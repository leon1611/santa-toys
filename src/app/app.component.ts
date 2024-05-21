import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SantaComponent } from './santa/santa.component';
import { ElfoComponent } from './elfo/elfo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SantaComponent,ElfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'santa-toys';
}
