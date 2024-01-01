import { Component } from '@angular/core';

@Component({
  selector: 'app-animated-text',
  standalone: true,
  imports: [],
  templateUrl: './animated-text.component.html',
  styleUrl: './animated-text.component.scss',
})
export class AnimatedTextComponent {
  viewText: string = '';
  line: string = '';
  // str1: string = 'doctor';
  // str2: string = 'developer';
  arr: string[] = ['doctor', 'developer'];

  text() {
    let i = 0;
    let j = 0;
    let c = this.arr[j].length;
    setInterval(() => {
      setTimeout(() => {
        this.line = '|';
      }, 200);
      setTimeout(() => {
        this.line = '';
      }, 400);
      if (i < this.arr[j].length) {
        setTimeout(() => {
          this.viewText += this.arr[j][i];
          i++;
        }, 500);
      } else if (c > 0) {
        setTimeout(() => {
          this.viewText = this.arr[j].slice(0, c - 1);
          c--;
        }, 600);
      } else if (j < this.arr.length - 1) {
        j++;
        i = 0;
        c = this.arr[j].length;
      } else {
        j = 0;
        i = 0;
        c = this.arr[j].length;
      }
    }, 1000);
  }
}
