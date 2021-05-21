import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//MATERIAL MODULES-------------------
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
//SERVICES--------------------------
import { BandsService } from './services/bands.service';

//COMPONENTS------------------------
import { AppComponent } from './app.component';
import { BandsTableComponent } from './table/bands-table/bands-table.component';
@NgModule({
  declarations: [
    AppComponent,
    BandsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
  ],
  providers: [BandsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
