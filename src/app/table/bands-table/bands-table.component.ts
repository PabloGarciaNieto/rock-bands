import { Component, AfterViewInit, ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Band } from './../../models/interface-band';

@Component({
  selector: 'app-bands-table',
  templateUrl: './bands-table.component.html',
  styleUrls: ['./bands-table.component.scss']
})

export class BandsTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name','detail', 'edit'];
  dataSource: MatTableDataSource<Band>;


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor() {
    const BANDS_DATA: Band[] = [
      {id: '1', name: 'The Rolling Stones', country: 'England', members: ['j', 'k', 'l']},
      {id: '2', name: 'Led Zeppelin', country: 'USA', members: ['m', 'n', 'o']},
      {id: '3', name: 'Queen', country: 'England', members: ['p', 'q', 'r']},

    ];
    this.dataSource = new MatTableDataSource(BANDS_DATA);
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

}
