import { Component, OnInit, Inject } from '@angular/core';

import { Client } from '../model/Client';
import { ClientService } from '../client.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrl: './client-edit.component.scss'
})
export class ClientEditComponent implements OnInit{

  client! : Client;
  errorMessage!: string;

  constructor(
    public dialogRef: MatDialogRef<ClientEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    if (this.data.client != null) {
      this.client = Object.assign({}, this.data.client);
    }
    else {
      this.client = new Client();
    }
  }

  onSave() {
    this.errorMessage = ''; 
    this.clientService.saveClient(this.client).subscribe({
      next: () => this.dialogRef.close(),
      error: err => {
        
        if (err.status === 500 || err.status === 400) {
          this.errorMessage = 'Ya existe un cliente con ese nombre.';
        } else {
          this.errorMessage = 'Error inesperado. Inténtalo de nuevo.';
        }
      }
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}