import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Student } from './entities/entities';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'simple';
  nameInp: string = '';
  surnameInp: string = '';
  brandInp: string = '';
  ageInp: number = 0;
  shouldShowElement: boolean = true;
  studentList: Student[] = [
    {
      id: 1,
      name: 'lorem',
      surname: 'ipsum',
      brand: 'ios',
      age: 24,
      shouldShowElement: true,
    },
    {
      id: 2,
      name: 'student',
      surname: 'dolor',
      brand: 'android',
      age: 30,
      shouldShowElement: true,
    },
  ];
  change(id: number) {
    for (let i = 0; i < this.studentList.length; i++) {
      if (id === this.studentList[i].id) {
        this.studentList[i].name = this.nameInp;
        this.studentList[i].surname = this.surnameInp;
        this.studentList[i].brand = this.brandInp;
        this.studentList[i].age = this.ageInp;
      }
    }
  }
  delete(item: any) {
    item.shouldShowElement = false;
  }
  add() {
    const newObject: Student = {
      id: this.studentList.length + 1,
      name: this.nameInp,
      surname: this.surnameInp,
      brand: this.brandInp,
      age: this.ageInp,
      shouldShowElement: true,
    };
    this.studentList.push(newObject);
  }
}
