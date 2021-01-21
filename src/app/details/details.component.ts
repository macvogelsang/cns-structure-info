import { Component, OnInit, Input } from '@angular/core';
import { Term } from '../Types';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() term: Term;

  constructor() { }

  ngOnInit(): void {
  }

}
