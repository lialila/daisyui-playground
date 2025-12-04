import { Component, Input } from '@angular/core';

export interface User {
  id: number;
  name: string;
  country: string;
  job: string;
  photoUrl: string;
  age: number;
  company: string;
}

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.html',
})
export class Table {
  @Input({ required: true }) users!: Array<User>;
}
