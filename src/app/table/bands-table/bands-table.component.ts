import { Component, AfterViewInit, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Band } from './../../models/interface-band';
import { Subscription } from 'rxjs';
import { BandsService } from './../../services/bands.service';


@Component({
  selector: 'app-bands-table',
  templateUrl: './bands-table.component.html',
  styleUrls: ['./bands-table.component.scss']
})

export class BandsTableComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['name','detail', 'edit', 'delete'];
  dataSource: MatTableDataSource<Band>;
  bandData: Band[] = [];


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
 //----------------
 public subscriptions: Subscription[] = [];

  constructor(private bansService: BandsService) {
 /*    const BANDS_DATA: Band[] = [
      {id: '1', name: 'The Rolling Stones', country: 'England', members: ['j', 'k', 'l']},
      {id: '2', name: 'Led Zeppelin', country: 'USA', members: ['m', 'n', 'o']},
      {id: '3', name: 'Queen', country: 'England', members: ['p', 'q', 'r']},

    ];
    this.dataSource = new MatTableDataSource(BANDS_DATA); */

    this.subscriptions.push(this.bansService.bands.subscribe(data => this.bandData = data));
    this.dataSource = new MatTableDataSource(this.bandData);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
