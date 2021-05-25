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
//YOUTUBE MODULE--------------------
import { YouTubePlayerModule } from "@angular/youtube-player";

//SERVICES--------------------------
import { BandsService } from './services/bands.service';

//COMPONENTS------------------------
import { AppComponent } from './app.component';
import { BandsTableComponent } from './table/bands-table/bands-table.component';
import { NewBandDialogComponent } from './table-dialogs/new-band-dialog/new-band-dialog.component';
import { EditBandDialogComponent } from './table-dialogs/edit-band-dialog/edit-band-dialog.component';
import { DetailBandDialogComponent } from './table-dialogs/detail-band-dialog/detail-band-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    BandsTableComponent,
    NewBandDialogComponent,
    EditBandDialogComponent,
    DetailBandDialogComponent,

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
    YouTubePlayerModule
  ],
  providers: [BandsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
