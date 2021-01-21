import { Component, OnInit } from '@angular/core';
import {Structure, Row, ResponseData} from '../Types'
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
    for (let row of this.rows) {
      this.structures = this.structures.concat(row.anatomical_structures);
    }
    // TODO Return a unique list based on structure name
  }

  getRows(): void {
    this.structuresService.getStructures()
      .subscribe({
        next: (res: ResponseData) => this.rows = res.data,
        error: err => console.log("error placeholder"),
        complete: () => this.onRowsPopulated()
      });
  }
}
