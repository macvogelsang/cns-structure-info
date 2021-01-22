import { Component, OnInit, Input } from '@angular/core';
import { Term } from '../Types';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
    private structuresService: StructuresService,
    private modalService: NgbModal
  ) {
    // Default modal information
    this.term =  {
      label: "",
      description: ""
    }
  }

  ngOnInit(): void {
    this.getTerm();
  }

  getTerm(): void {
    if (!this.id) {
      this.term.label = "Not found.";
      this.term.description = "No UBERON id present for this structure.";
      return;
    }
    this.structuresService.getOntologyInfo(this.id).subscribe({
      next: res => this.term = res["_embedded"]["terms"][0],
      complete: () => console.log(this.term)
    })
  }

  exitModal(): void {
    this.modalService.dismissAll();
  }
}
