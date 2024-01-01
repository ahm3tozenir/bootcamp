import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-door',
  standalone: true,
  imports: [NgClass],
  templateUrl: './door.component.html',
  styleUrl: './door.component.scss',
})
export class DoorComponent {
  status: boolean = true;
  clickEvent() {
    this.status = !this.status;
  }
}
