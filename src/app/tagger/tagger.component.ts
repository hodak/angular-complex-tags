import { Component, Input } from '@angular/core';

@Component({
  selector: 'tagger',
  templateUrl: './tagger.component.html',
  styleUrls: ['./tagger.component.css'],
})
export class TaggerComponent {
  @Input() tags = [];
  @Input() singleTagTemplate;
}
