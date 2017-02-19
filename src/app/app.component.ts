import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPeople = false;

  tags = [
    {
      type: 'email',
      email: 'hodor@example.com',
    },
  ]

  people = [
    { type: 'candidate', name: 'Jon Doe', email: 'jon.doe@example.com', selected: true },
    { type: 'candidate', name: 'George Bland', email: 'george@example.com', selected: false },
    { type: 'candidate', name: 'Juan Johns', email: 'juan@example.com', selected: false },
  ]

  constructor() {
    this.tags.unshift(this.people[0]);
  }

  emailValidator(value) {
    return value.includes('@') ? null : 'Invalid e-mail address';
  }

  handleNewTag(inputValue) {
    this.tags.push({ type: 'email', email: inputValue });
  }

  handleDeleteTag({ tag, index }) {
    if('selected' in tag) { tag.selected = false; }
    this.tags.splice(index, 1);
  }

  handleCheckboxChange(person) {
    if(person.selected) {
      this.tags.push(person);
    } else {
      this.handleDeleteTag({ tag: person, index: this.tags.indexOf(person) });
    }
  }
}
