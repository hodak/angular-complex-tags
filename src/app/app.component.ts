import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    :host >>> tagger .tagger__tag--candidate {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      padding: 0 5px 0 0;
      overflow: hidden;
      height: 32px;
    }

    :host >>> tagger .tagger__tag--candidate .tag__avatar {
      vertical-align: middle;
    }
  `],
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
    { type: 'candidate', name: 'Jon Doe', email: 'jon.doe@example.com', selected: true, avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAIVBMVEX///8AAAD/Zsz/ZjOZAGZVVVXdAABERESZmZnMzMyZZjPOyCvQAAABAklEQVQ4jYWSARaDIAxDSVtAd/8DryWA4HyTPRWb35AhKS0DCYg7r/vAbbzIP8woLA9sskHQp3xEYSIQMRHm6zHhhUEAIdvdQYxNNJDWEHNlhnj3CmtCh7CElhL5TC5XDDx8AiiwWZhLAHxvemFHZAM2nUDBSBBEOMSsO7QMw6FnTGwfxKJLXyKxv3P8C+3N5l7GvlLsUUZm8Lu7bjMXLsyub5HoeA2LH7ZzE0FsqK19PzI0bttrvpGu1/28qCqE6zNHRcauO4FjHDafZC8sQCDZlfPklbPuQA7iyN2C8gY0i6o1t9EWzL+A6zrHE7Dqj8Cp/4Hjc/wHPOPLEvVtCX0AvoKYBsQjgsrUAAAAAElFTkSuQmCC' },
    { type: 'candidate', name: 'George Bland', email: 'george@example.com', selected: false, avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAHlBMVEX//wD///8AAABERET/ZjNVVVXMmWaZ//8Amf8iIiLlTq/3AAAA2ElEQVQ4jXVTixKDMAiLqa/9/w+vgtCwdpyc5yWE1AI2CbI/nhlQHOiPJ2dCr0NEGxQk3CsbIBynINSJOZgErmAhEEV9SVhFexiwBst614DXn380khAFz2mLY0KPwOu+LX8I6vqyFJ+oHdpmqT7K1/AQrmsLiSMpirfCWBCo7yNMbnnNH/ESEoRchZzXJNzFisDRIxRawV/5R4IY8zKEfn7122SFn0HwmY3+hwiMsQ98H5ebEyUE7rsa0L2Y8LMQJjx3SwkPngan1XOcMQnz8tra2wpb5E5/AQPwAxsvhat4AAAAAElFTkSuQmCC', },
    { type: 'candidate', name: 'Juan Johns', email: 'juan@example.com', selected: false, avatar: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ49P3zQUpVIze5VMbqhgou4wCnQAen7GjOcqUW-8ENJD-pGse18g', },
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
