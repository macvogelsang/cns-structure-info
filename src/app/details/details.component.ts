import { Component, OnInit, Input } from '@angular/core';
import { Term } from '../Types';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

import { StructuresService } from '../structures.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  // Term to display in the modal
  term: Term;
  // Input id from the route path
  @Input() id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private structuresService: StructuresService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTerm();
  }

  getTerm(): void {
    if (!this.id) {
      this.term =  {
        label: "Not found",
        description: "No ontology id present for this structure."
      }
      return;
    }
    this.structuresService.getOntologyInfo(this.id).subscribe({
      next: res => this.term = res["_embedded"]["terms"][0],
      complete: () => console.log(this.term)
    })
  }

}
