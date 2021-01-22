import { Component, OnInit, OnDestroy} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DetailsComponent} from './details/details.component'

@Component({
  selector: 'app-modal-container',
  template: ''
})
export class DetailModalComponent implements OnInit, OnDestroy {
  destroy = new Subject<any>();
  currentDialog = null;

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroy)).subscribe(params => {

        this.currentDialog = this.modalService.open(DetailsComponent, {centered: false, size: "lg"});
        this.currentDialog.componentInstance.id = params.id;

        // Go back to the main structure list after modal is closed 
        this.currentDialog.result.then(result => {
          this.navigateToRoot()
        }, reason => {
          this.navigateToRoot()
        });
    });
  }
  
  navigateToRoot(): void {
    this.router.navigateByUrl('/');
  }

  ngOnDestroy(): void {
    // stop the subscriber
    this.destroy.next();
  }
}