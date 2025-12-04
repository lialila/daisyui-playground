import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from "./components/button/button";
import { List } from "./components/list/list";
import { Card } from "./components/card/card";
import { Dropdown } from "./components/dropdown/dropdown";
import { Table, User } from "./components/table/table";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, List, Card, Dropdown, Table],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('daisyui-playground');
  protected handleClick = () => alert('Button clicked!');

  protected readonly users: User[] = [
    {
      id: 1,
      name: 'Jane Doe',
      age: 30, country: 'UK',
      job: 'Software Engineer',
      photoUrl: 'https://img.daisyui.com/images/profile/demo/1@94.webp',
      company: 'Acme Corp'
    },
    {
      id: 2,
      name: 'Thomas Smith',
      age: 25, country: 'UK',
      job: 'Graphic Designer',
      photoUrl: 'https://img.daisyui.com/images/profile/demo/2@94.webp',
      company: 'Design Studio X'
    },
    {
      id: 3,
      name: 'Alice Johnson',
      age: 28,
      country: 'Canada',
      job: 'Product Manager',
      photoUrl: 'https://img.daisyui.com/images/profile/demo/3@94.webp',
      company: 'Tech Innovations'
    },
    {
      id: 4,
      name: 'Milly Brown',
      age: 35,
      country: 'Austria',
      job: 'Data Scientist',
      photoUrl: 'https://img.daisyui.com/images/profile/demo/4@94.webp',
      company: 'Data Insights Inc.'
    },
    {
      id: 5,
      name: 'Jesy Doe',
      age: 30,
      country: 'USA',
      job: 'Software Engineer',
      photoUrl: 'https://img.daisyui.com/images/profile/demo/1@94.webp',
      company: 'Acme Corp'
    },
    {
      id: 6,
      name: 'Gregory Bowie',
      age: 44,
      country: 'France',
      job: 'Graphic Designer',
      photoUrl: 'https://img.daisyui.com/images/profile/demo/2@94.webp',
      company: 'Design Studio X'
    },
    {
      id: 7,
      name: 'Alice Peterson',
      age: 28,
      country: 'Canada',
      job: 'Product Manager',
      photoUrl: 'https://img.daisyui.com/images/profile/demo/3@94.webp',
      company: 'The Creative Co.'
    },
    {
      id: 8,
      name: 'Bobby Johnson',
      age: 35,
      country: 'Australia',
      job: 'Data Scientist',
      photoUrl: 'https://img.daisyui.com/images/profile/demo/4@94.webp',
      company: 'Data LT Inc.'
    },
  ];
}
