import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CoreModule } from './core/core.module';
import { CategoryModule } from './category/category.module';
import { AuthorModule } from './author/author.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {GameModule} from './game/game.module';
import { ClientModule } from './client/client.module';
import { LoanModule } from './loan/loan.module';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CategoryModule,
    AppRoutingModule,
    AuthorModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    GameModule,
    ClientModule,
    LoanModule,
    TranslateModule.forRoot({
      fallbackLang: 'es',
      lang: 'es'
    }),
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    /** HttpLoader devuelve Provider[]; debe expandirse aquí (no pasar como `loader` de forRoot). */
    ...provideTranslateHttpLoader({
      prefix: '/i18n/',
      suffix: '.json'
    }),
  ],
  bootstrap: [AppComponent]
})


/**
 * Main application module that wires feature modules and shared dependencies.
 */
export class AppModule { }
