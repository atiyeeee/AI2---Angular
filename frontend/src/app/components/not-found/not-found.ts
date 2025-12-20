import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.html',
  imports: [MatCardModule, MatTableModule, MatButtonModule, MatIconModule, MatToolbarModule]
})
export class NotFoundComponent { }
