import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from 'src/app/api/models/Candidate';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.sass']
})
export class CandidatesListComponent implements OnInit {
  page = 1;
  pageSize = 5;
  collectionSize: number;
  CANDIDATES: Candidate[]
  candidates: Candidate[]

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { entity: Candidate[] }) => {
      this.CANDIDATES = data.entity;
      this.collectionSize = this.CANDIDATES.length;
      this.refreshCandidates();
    })
  }

  get noData() {
    return this.CANDIDATES.length === 0
  }

  refreshCandidates() {
    this.candidates = this.CANDIDATES
      .map((candidate, i) => ({id: i + 1, ...candidate}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
