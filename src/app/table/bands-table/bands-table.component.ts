import { Component, AfterViewInit, ViewChild, OnInit, OnDestroy, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Band } from './../../models/interface-band';
import { Subscription } from 'rxjs';
import { BandsService } from './../../services/bands.service';
import { MatDialog } from '@angular/material/dialog';
import { NewBandDialogComponent } from './../../new-band-dialog/new-band-dialog.component';
import { EditBandDialogComponent } from './../../edit-band-dialog/edit-band-dialog.component';





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
  constructor(private bansService: BandsService,
    public dialog: MatDialog) {
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
      localStorage.setItem('dataSource', JSON.stringify(this.bandData));
    } else {
      console.log('localStorage vacío');
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
  //Delete a Band--------
  deleteBand(bandId: number) {
    console.log('ouch!!');
    let index = this.bandData.findIndex(e => e.id === bandId);
    console.log(index);
    this.bandData.splice(index, 1);
    this.bansService.newBands(this.bandData);
    this.subscriptions.push(this.bansService.bands.subscribe(data => this.bandData = data));
    this.dataSource = new MatTableDataSource(this.bandData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    localStorage.setItem('dataSource', JSON.stringify(this.bandData));
  }
  //Create a New Band--------
  openNewBandDialog() {
    if (this.bandData.length < 1) {
      console.log('reduce petará');
      let newBandForm: Band = {
        id: 0,
        name: '',
        country: '',
        members: [],
        history: '',
        video: '',
      };
      this.bandData.push(newBandForm);
    }
    const maxIdBand = this.bandData.reduce(function (prev, current) {
      return (prev.id > current.id) ? prev : current
    });
    console.log('maxIdBand');
    console.log(maxIdBand);
    let newId = maxIdBand.id + 1;
    console.log('this.bandData');
    console.log(this.bandData);
    let idSt = newId;
    let dialogRef = this.dialog.open(NewBandDialogComponent, {
      data: {
        id: idSt
      },
      width: '95vw',
      maxWidth: '95vw',
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        console.log('New band created');
        this.bandData.push(res.data);
        let id = this.bandData.findIndex(e => e.id === 0);
        console.log(id);
        if (id !== -1) {
          this.bandData.splice(id, 1);
        }
        this.bansService.newBands(this.bandData);
        this.subscriptions.push(this.bansService.bands.subscribe(data => this.bandData = data));
        localStorage.setItem('dataSource', JSON.stringify(this.bandData));
        this.dataSource = new MatTableDataSource(this.bandData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      } else {
        console.log('No band created');
      }
    });
  }
  //Edit a Band--------
  OpenEditBandDialog(bandId: number) {
    console.log(this.bandData);
    console.log(typeof this.bandData);
    let band = this.bandData.find(val => val.id === bandId);
    console.log(band?.members);
    let dialogRef = this.dialog.open(EditBandDialogComponent, {
      data: {
        id: band?.id,
        name: band?.name,
        country: band?.country,
        members: band?.members,
        history: band?.history,
        video: band?.video,
      },
      width: '95vw',
      maxWidth: '95vw',
    });
    dialogRef.afterClosed().subscribe(res => {
      const bandId = res.data.id
      let index = this.bandData.findIndex(e => e.id === bandId);
      this.bandData.splice(index, 1);
      console.log(this.bandData);
      this.bandData.push(res.data);
      this.bansService.newBands(this.bandData);
      this.subscriptions.push(this.bansService.bands.subscribe(data => this.bandData = data));
      localStorage.setItem('dataSource', JSON.stringify(this.bandData));
      this.dataSource = new MatTableDataSource(this.bandData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.bandData);
    });
  }

  clear() {
    localStorage.removeItem('dataSource');
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
