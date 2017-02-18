import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  // TODO? tags must be unique - for deleting purposes
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

  emailValidator(value) {
    return value.includes('@') ? null : 'Invalid e-mail address';
  }

  handleNewTag(inputValue) {
    this.tags.push({ type: 'email', email: inputValue });
  }

  handleDeleteTag(tag) {
    this.tags.splice(this.tags.indexOf(tag), 1);
  }
}
