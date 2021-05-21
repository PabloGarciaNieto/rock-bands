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
  displayedColumns: string[] = ['name', 'detail', 'edit', 'delete', 'add'];
  dataSource: MatTableDataSource<Band>;
  bandData: Band[] = [];
  new: Band = { id: '5', name: 'Deep Purple', country: 'England', members: ['p', 'q', 'r'] };

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  //Para poder unsubsctribe en OnDestroy
  public subscriptions: Subscription[] = [];
  //-----
  constructor(private bansService: BandsService) {
    this.subscriptions.push(this.bansService.bands.subscribe(data => this.bandData = data));
    this.dataSource = new MatTableDataSource(this.bandData);
  }

  ngOnInit() {
    let sessionData = JSON.parse(localStorage.getItem('dataSource') || '[]');
    if (sessionData.length > 0) {
      console.log(sessionData);
      this.bandData = sessionData;
      this.bansService.newBands(this.bandData);
      this.subscriptions.push(this.bansService.bands.subscribe(data => this.bandData = data));
      this.dataSource = new MatTableDataSource(this.bandData);
    } else {
      console.log('cerito');
    }



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
  deleteBand(bandId: string) {
    console.log('ouch!!');
    let index = this.bandData.findIndex(e => e.id === bandId);
    console.log(index);
    this.bandData.splice(index, 1);
    this.bansService.newBands(this.bandData);
    this.subscriptions.push(this.bansService.bands.subscribe(data => this.bandData = data));
    this.dataSource = new MatTableDataSource(this.bandData);
    console.log(this.bandData);
    localStorage.setItem('dataSource', JSON.stringify(this.bandData));
  }

  addNewBand() {
    console.log('yeah!!');
    this.bandData.push(this.new);
    this.bansService.newBands(this.bandData);
    this.subscriptions.push(this.bansService.bands.subscribe(data => this.bandData = data));
    this.dataSource = new MatTableDataSource(this.bandData);
    localStorage.setItem('dataSource', JSON.stringify(this.bandData));
  }
  clear() {
    localStorage.removeItem('dataSource');
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    console.log('jumanji');
  }

}