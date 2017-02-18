import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  inputValue = '';

  tags = [
    {
      type: 'candidate',
      name: 'Jon Doe',
      email: 'jon.doe@example.com',
    },
    {
      type: 'email',
      email: 'hodor@example.com',
    },
  ]

  handleNewTag(inputValue) {
    if(this.isValidEmail(inputValue)) {
      this.tags.push({ type: 'email', email: inputValue });
    } else {
      this.inputValue = inputValue;
    }
  }

  isValidEmail(value) {
    return value.includes('@');
  }
}
