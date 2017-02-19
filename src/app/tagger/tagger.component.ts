import { Component, Input, Output, EventEmitter, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'tagger',
  templateUrl: './tagger.component.html',
  styleUrls: ['./tagger.component.css'],
})
export class TaggerComponent {
  @Input() tags = [];
  @Input() singleTagTemplate;
  @Input() afterTagsTemplate;
  @Input() delimiterKeyCodes = [32, 13, 188]; // [space, enter, comma]
  @Input() tagValidator = (_) => null;
  @Input() tagTypeKey = 'type';
  @Output() newTag = new EventEmitter();
  @Output() deleteTag = new EventEmitter();
  @ViewChild('input') input;
  @ViewChildren('tagElRef') tagElRefs;

  error;

  onKeyDown(event, input) {
    this.error = null;

    if(this.delimiterKeyCodes.indexOf(event.keyCode) === -1) { return }
    event.preventDefault();

    input.value = input.value.trim();
    if(input.value.length === 0) { return }

    let error = this.tagValidator(input.value)
    if(error) { return this.error = error; }

    this.newTag.emit(input.value);
    input.value = '';
  }

  delete(tag, index) {
    setTimeout(() => { this.deleteTag.emit({ tag, index }); }, 0);
  }

  handleTagsClick(event) {
    let clickedOnSingleTag =
      this.tagElRefs
      .some((tagElRef) => tagElRef.nativeElement.contains(event.target));

    if(!clickedOnSingleTag) {
      this.input.nativeElement.focus();
    }
  }
}
