import { Component, OnInit } from '@angular/core';
import {Structure, Row, ResponseData, Term} from '../Types'
import {StructuresService} from '../structures.service'

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  structures: Structure[] = [];
  rows: Row[];
  constructor(private structuresService: StructuresService) { }

  ngOnInit(): void {
    this.getRows();
  }

  onRowsPopulated(): void {
    let names = new Set();

    for (let row of this.rows) {
      for (let struct of row.anatomical_structures) {
        if (!names.has(struct.name)) {
          this.structures.push(struct);
          names.add(struct.name);
        }
      }
    }
  }

  getRows(): void {
    this.structuresService.getStructures()
      .subscribe({
        next: (res: ResponseData) => this.rows = res.data,
        error: err => console.log("error placeholder"),
        complete: () => this.onRowsPopulated()
      });
  }

  getTerm(oboId: string): void {
    let transformedId = oboId.replace(":","_");
    this.structuresService.getOntologyInfo(transformedId).subscribe({
      next: res => this.selectedTerm = res["_embedded"]["terms"][0],
      complete: () => console.log(this.selectedTerm)
    })
  }

  selectedStructure: Structure;
  selectedTerm: Term;

  onClick(struct: Structure): void {
    this.selectedStructure = struct;
    if (struct.id) {
      this.getTerm(struct.id);
    } else {
      this.selectedTerm =  {
        label: "Not found",
        description: "No ontology id present for this structure."
      }
    }
  }

}
