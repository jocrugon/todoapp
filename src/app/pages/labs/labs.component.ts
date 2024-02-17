import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  name = signal('José Darío González Cruz');
  tasks = signal([
    'install angula CLI',
    'create project',
    'create components'
  ]);

  age = 24;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';
  person = {
    name:'dario',
    age: 24,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }
  clickHandler(){
    alert('Hola');
  }

  changeHandler(event:Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue)
  }
  keydownHandler(event:KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
