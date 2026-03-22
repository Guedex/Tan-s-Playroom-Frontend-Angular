import { Component, OnInit, Inject } from '@angular/core';

import { Client } from '../model/Client';
import { ClientService } from '../client.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrl: './client-edit.component.scss'
})
/**
 * Dialog component used to create or edit clients.
 */
export class ClientEditComponent implements OnInit{

  client! : Client;
  errorMessage!: string;

  constructor(
    public dialogRef: MatDialogRef<ClientEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientService: ClientService,
    private translate: TranslateService
  ) {}

  /**
   * Initializes model from injected dialog data.
   */
  ngOnInit(): void {
    if (this.data.client != null) {
      this.client = Object.assign({}, this.data.client);
    }
    else {
      this.client = new Client();
    }
  }

  /**
   * Persists current client and handles backend validation errors.
   */
  onSave() {
    this.errorMessage = ''; 
    this.clientService.saveClient(this.client).subscribe({
      next: () => this.dialogRef.close(),
      error: err => {
        
        if (err.status === 500 || err.status === 400) {
          this.errorMessage = this.translate.instant('client.duplicate_name_error');
        } else {
          this.errorMessage = this.translate.instant('client.unexpected_error');
        }
      }
    });
  }

  /**
   * Closes dialog without saving.
   */
  onClose() {
    this.dialogRef.close();
  }
}