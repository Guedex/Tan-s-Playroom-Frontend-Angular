import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.translate.setDefaultLang('es');

    if (isPlatformBrowser(this.platformId)) {
      // Solo se ejecuta en el navegador, nunca en el servidor
      const savedLang = localStorage.getItem('app.lang');
      const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';
      const lang = savedLang ?? browserLang;
      this.translate.use(lang);
    } else {
      // En el servidor usamos siempre el idioma por defecto
      this.translate.use('es');
    }
  }
}
