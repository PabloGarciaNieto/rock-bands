import { Component, AfterViewInit, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Band } from './../../models/interface-band';
import { Subscription } from 'rxjs';
import { BandsService } from './../../services/bands.service';
import { MatDialog } from '@angular/material/dialog';
import { NewBandDialogComponent } from '../../table-dialogs/new-band-dialog/new-band-dialog.component';
import { EditBandDialogComponent } from '../../table-dialogs/edit-band-dialog/edit-band-dialog.component';
import { DetailBandDialogComponent } from './../../table-dialogs/detail-band-dialog/detail-band-dialog.component';




@Component({
  selector: 'app-bands-table',
  templateUrl: './bands-table.component.html',
  styleUrls: ['./bands-table.component.scss']
})

export class BandsTableComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['name', 'detail', 'edit', 'delete'];
  dataSource: MatTableDataSource<Band>;
  bandData: Band[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  //Para cambiar el ancho de los mat-dialog en función del dispositivo
  width: string = '';
  maxWidth: string = '';
  //Para poder unsubsctribe en OnDestroy
  public subscriptions: Subscription[] = [];
  //-----
  constructor(private breakpointObserver: BreakpointObserver,
    private bansService: BandsService,
    public dialog: MatDialog) {
    this.subscriptions.push(this.bansService.bands.subscribe(data => this.bandData = data));
    this.dataSource = new MatTableDataSource(this.bandData);
  }

  ngOnInit() {
    let sessionData = JSON.parse(localStorage.getItem('dataSource') || '[]');
    if (sessionData.length > 0) {
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
  //Para cambiar el ancho de los mat-dialog en función del dispositivo-----
  get getBreakpoints() {
    return this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        console.log(state.matches);
        if (state.matches) {
          this.width = '95vw';
          this.maxWidth = '95vw';
        } else {
          this.width = '70vw';
          this.maxWidth = '70vw';
        }
      });
  }
  //Borrar una banda--------
  deleteBand(bandId: number) {
    console.log('ouch!!');
    let index = this.bandData.findIndex(e => e.id === bandId);
    this.bandData.splice(index, 1);
    this.bansService.newBands(this.bandData);
    this.subscriptions.push(this.bansService.bands.subscribe(data => this.bandData = data));
    this.dataSource = new MatTableDataSource(this.bandData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    localStorage.setItem('dataSource', JSON.stringify(this.bandData));
  }
  //CREAR UNA BANDA--------
  openNewBandDialog() {
    this.subscriptions.push(this.getBreakpoints);
  //Para que el reduce no pete cuando el array llegue vacio tras borrar todas las bandas
    if (this.bandData.length < 1) {
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
    //Crear nuevo id-----
    const maxIdBand = this.bandData.reduce(function (prev, current) {
      return (prev.id > current.id) ? prev : current
    });
    let newId = maxIdBand.id + 1;
    let idSt = newId;
    let dialogRef = this.dialog.open(NewBandDialogComponent, {
      data: {
        id: idSt
      },
      width: this.width,
      maxWidth: this.maxWidth,
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.bandData.push(res.data);
        let id = this.bandData.findIndex(e => e.id === 0);
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
  //EDITAR UNA BANDA--------
  OpenEditBandDialog(bandId: number) {
    this.subscriptions.push(this.getBreakpoints);
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
      width: this.width,
      maxWidth: this.maxWidth,
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        const bandId = res.data.id
        let index = this.bandData.findIndex(e => e.id === bandId);
        this.bandData.splice(index, 1);
        this.bandData.push(res.data);
        this.bansService.newBands(this.bandData);
        this.subscriptions.push(this.bansService.bands.subscribe(data => this.bandData = data));
        localStorage.setItem('dataSource', JSON.stringify(this.bandData));
        this.dataSource = new MatTableDataSource(this.bandData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      } else {
        console.log('No band edited');
      }
    });
  }
  //VER DETALLE DE UNA BANDA--------------
  openShowBandDetail(bandId: number) {
    this.subscriptions.push(this.getBreakpoints);
    let band = this.bandData.find(val => val.id === bandId);
    this.dialog.open(DetailBandDialogComponent, {
      data: {
        id: band?.id,
        name: band?.name,
        country: band?.country,
        members: band?.members,
        history: band?.history,
        video: band?.video,
      },
      width: this.width,
      maxWidth: this.maxWidth,
    });
  }
  clear() {
    localStorage.removeItem('dataSource');
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
