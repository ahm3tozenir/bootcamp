import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'algorithms';
  count: number = 0;
  howMany(day: number) {
    let arr = Array.from({ length: day }, (_) => 3);
    for (let i = 1; i < arr.length; i++) {
      arr[i] += 2 * i;
    }
    let sorted = arr.sort((a, b) => b - a);
    return sorted;
  }
  totalAlg(arr: number[]) {
    return arr.reduce((a, b) => a + b, 0);
  }
  text: string = '';
  removeChar(str: string): string {
    let newStr = str.slice(1, str.length - 1);
    return newStr;
  }
  tripleTrouble(one: string, two: string, three: string) {
    let value = '';
    for (let i = 0; i < one.length; i++) {
      value += one[i] + two[i] + three[i];
    }
    return value;
  }
  twoArePositive(a: number, b: number, c: number) {
    let checkArr = [a, b, c];
    let count = 0;
    for (let i of checkArr) {
      if (i > 0) {
        count++;
      }
    }
    if (count == 2) {
      return true;
    } else {
      return false;
    }
  }
  sumMul(n: number, m: number) {
    if (n > 0 && m > 0) {
      let sum = 0;
      let i = 1;
      while (i < Math.ceil(m / n)) {
        sum += n * i;
        i++;
      }
      return sum;
    } else {
      return 'INVALID';
    }
  }
  lineupStudents(students: string): string[] {
    let arr = students.split(' ');
    let gram = arr.sort().reverse();
    let size = gram.sort((a, b) => b.length - a.length);

    return size;
  }
  distinct(a: number[]) {
    let newArr: any = [];
    for (let i = 0; i < a.length; i++) {
      if (!newArr.includes(a[i])) {
        newArr.push(a[i]);
      }
    }
    return newArr;
  }
  capitals(word: any) {
    let arr = [];
    for (let i in word) {
      if (word[i] == word[i].toUpperCase()) {
        arr.push(Number(i));
      }
    }
    return arr;
  }
  isLeapYear(year: number) {
    let condition100 = year % 100 == 0;
    let condition400 = year % 400 == 0;
    let condition4 = year % 4 == 0;
    if ((condition4 || condition400) && (!condition100 || condition400)) {
      return true;
    } else {
      return false;
    }
  }
  jadenCasing(str: string) {
    let arr = str.split(' ');
    let upper = [];
    for (let i = 0; i < arr.length; i++) {
      upper.push(arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length));
    }
    let newStr = upper.join(' ');
    return newStr;
  }
  transposeTwoStrings(array: string[]) {
    let length;
    if (array[0].length >= array[1].length) {
      length = array[0].length;
    } else {
      length = array[1].length;
    }
    let str = '';

    for (let i = 0; i < length; i++) {
      let first = array[0][i];
      let second = array[1][i];
      let br = '\n';
      if (first == undefined) {
        first = ' ';
      }
      if (second == undefined) {
        second = ' ';
      }
      if (i == length - 1) {
        br = '';
      }
      str += first + ' ' + second + br;
    }

    return str;
  }
  isValidChess960(pieces: string) {
    let arr = pieces.split('');
    let firstR = arr.indexOf('R');
    let reversed = arr.slice().reverse();
    let secondR = arr.length - 1 - reversed.indexOf('R');
    let king = arr.indexOf('K');
    let firstB = arr.indexOf('B');
    let secondB = arr.length - 1 - reversed.indexOf('B');
    if (firstR < king && king < secondR && (secondB - firstB) % 2 == 1) {
      return true;
    } else {
      return false;
    }
  }
  twoSum(numbers: number[], target: number) {
    let twoArr = [];
    let a = 0;
    while (twoArr.length == 0) {
      for (let i = 1; i <= numbers.length; i++) {
        if (numbers[i] + numbers[a] == target) {
          let index1 = numbers.indexOf(numbers[i]);
          let index2 = numbers.indexOf(numbers[a]);
          if (index1 != index2) {
            twoArr.push(index1, index2);
          } else {
            index2 = index1 + 1;
            twoArr.push(index1, index2);
          }
          break;
        }
      }
      a = a + 1;
    }
    return twoArr;
  }
  arrayDiff(a: number[], b: number[]) {
    if (b.length == 0) {
      return a;
    } else {
      let filted = a.filter((e) => {
        return !b.includes(e);
      });
      return filted;
    }
  }
  validParentheses(parenStr: string) {
    let count = 0;
    for (let i = 0; i < parenStr.length; i++) {
      if (parenStr[i] == '(') {
        count++;
      } else {
        count--;
      }
      if (count < 0) {
        return false;
      }
    }
    return count == 0;
  }
}
