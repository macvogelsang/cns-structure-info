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
    // Iterate through avaiable rows and find unique structures by name
    for (let row of this.rows) {
      for (let struct of row.anatomical_structures) {
        if (!struct.id || struct.id.includes("not found")) {
          struct.id = "";
        }
        if (!names.has(struct.name)) {
          this.structures.push(struct);
          names.add(struct.name);
        }
      }
    }
    // Sort remaining structures alphabetically
    this.structures.sort((a: Structure, b:Structure) => a.name.localeCompare(b.name));
  }

  getRows(): void {
    this.structuresService.getStructures()
      .subscribe({
        next: (res: ResponseData) => this.rows = res.data,
        error: err => console.log("error placeholder"),
        complete: () => this.onRowsPopulated()
      });
  }

  selectedStructure: Structure;

  onClick(struct: Structure): void {
    this.selectedStructure = struct;
  }

}
