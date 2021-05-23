import { Component, AfterViewInit, ViewChild, OnInit, OnDestroy, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Band } from './../../models/interface-band';
import { Subscription } from 'rxjs';
import { BandsService } from './../../services/bands.service';
import { MatDialog } from '@angular/material/dialog';
import { NewBandDialogComponent } from './../../new-band-dialog/new-band-dialog.component';




@Component({
  selector: 'app-bands-table',
  templateUrl: './bands-table.component.html',
  styleUrls: ['./bands-table.component.scss']
})

export class BandsTableComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['name', 'detail', 'edit', 'delete', 'add'];
  dataSource: MatTableDataSource<Band>;
  bandData: Band[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  //Para poder unsubsctribe en OnDestroy
  public subscriptions: Subscription[] = [];
  //-----
  constructor(private bansService: BandsService, public dialog: MatDialog) {
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

  openNewBandDialog() {
    let newId = this.bandData.length + 1;
    console.log(newId);
    let idSt = newId.toString();
    let dialogRef = this.dialog.open(NewBandDialogComponent, {
      data: {
        id: idSt
      },
      width: '100vw',
      maxWidth: '100vw',
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
      this.bandData.push(res.data);
      this.bansService.newBands(this.bandData);
      this.subscriptions.push(this.bansService.bands.subscribe(data => this.bandData = data));
      this.dataSource = new MatTableDataSource(this.bandData);
      localStorage.setItem('dataSource', JSON.stringify(this.bandData));
      } else {
        console.log('No band created');
      }
    });
  }

  clear() {
    localStorage.removeItem('dataSource');
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    console.log('jumanji');
  }

}
