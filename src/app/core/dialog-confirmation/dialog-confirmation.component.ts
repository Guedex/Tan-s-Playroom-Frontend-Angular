import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirmation',
  templateUrl: './dialog-confirmation.component.html',
  styleUrls: ['./dialog-confirmation.component.scss']
})
/**
 * Generic confirmation dialog used to ask the user for an explicit decision.
 */
export class DialogConfirmationComponent implements OnInit {

  /** Dialog title text. */
  title! : string;
  /** Dialog body text (supports HTML content). */
  description! : string;

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  /**
   * Initializes dialog texts from injected data.
   */
  ngOnInit(): void {
    this.title = this.data.title;
    this.description = this.data.description;
  }

  /**
   * Closes the dialog returning confirmation.
   */
  onClose() {
    this.dialogRef.close(true);
  }
  /** True when the title is the generic error label (matches common.error in i18n). */
  get isErrorTitle(): boolean {
    return this.title?.trim().toLowerCase() === 'error';
  }
}
