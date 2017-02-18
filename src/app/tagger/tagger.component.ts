import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tagger',
  templateUrl: './tagger.component.html',
  styleUrls: ['./tagger.component.css'],
})
export class TaggerComponent {
  @Input() tags = [];
  @Input() singleTagTemplate;
  @Input() delimiterKeyCode = 32;
  @Input() inputValue = '';
  @Output() newTag = new EventEmitter();

  onKeyUp(event) {
    if(event.keyCode !== this.delimiterKeyCode) { return }
    this.inputValue = this.inputValue.substring(0, this.inputValue.length - 1);
    if(this.inputValue.length === 0) { return }

    this.newTag.emit(this.inputValue);
    this.inputValue = '';
  }
}
