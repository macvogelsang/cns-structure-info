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

  @Input() term: Term;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private structuresService: StructuresService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTerm();
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.getTerm();
      }
    })
  }

  getTerm(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.term =  {
        label: "Not found",
        description: "No ontology id present for this structure."
      }
      return;
    }
    this.structuresService.getOntologyInfo(id).subscribe({
      next: res => this.term = res["_embedded"]["terms"][0],
      complete: () => console.log(this.term)
    })
  }

}
