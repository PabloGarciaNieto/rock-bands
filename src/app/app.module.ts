import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//MATERIAL MODULES-------------------
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

//SERVICES--------------------------
import { BandsService } from './services/bands.service';

//COMPONENTS------------------------
import { AppComponent } from './app.component';
import { BandsTableComponent } from './table/bands-table/bands-table.component';
import { NewBandDialogComponent } from './new-band-dialog/new-band-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    BandsTableComponent,
    NewBandDialogComponent,

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
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [BandsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
