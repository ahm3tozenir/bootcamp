import { Component } from '@angular/core';

@Component({
  selector: 'app-wave',
  standalone: true,
  imports: [],
  templateUrl: './wave.component.html',
  styleUrl: './wave.component.scss',
})
export class WaveComponent {
  textUpArr: string[] = [
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
  ];
  textBottomArr: string[] = [
    'w',
    'a',
    'v',
    'e',
    'w',
    'a',
    'v',
    'e',
    'w',
    'a',
    'v',
    'e',
    'w',
    'a',
    'v',
    'e',
  ];
  textUp: string = this.textUpArr.join('');
  textBottom: string = this.textBottomArr.join('');

  wave() {
    let i = 0;
    setInterval(() => {
      setTimeout(() => {
        this.textUpArr[i] = this.textBottomArr[i];
        this.textBottomArr[i] = '.';
        this.textUp = this.textUpArr.join('');
        this.textBottom = this.textBottomArr.join('');
        i++;
      }, 300);
      setTimeout(() => {
        this.textBottomArr[i - 1] = this.textUpArr[i - 1];
        this.textUpArr[i - 1] = '.';
        this.textUp = this.textUpArr.join('');
        this.textBottom = this.textBottomArr.join('');
      }, 500);
      if (i == this.textBottomArr.length) {
        i = 0;
      }
    }, 600);
  }
}
