import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  readonly langOptions: { code: string; flagClass: string; labelKey: string }[] = [
    { code: 'es', flagClass: 'fi-es', labelKey: 'nav.lang_es' },
    { code: 'en', flagClass: 'fi-gb', labelKey: 'nav.lang_en' },
  ];

  currentLang: string;
  private langSub?: Subscription;

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.currentLang = translate.currentLang ?? translate.getFallbackLang() ?? 'es';
  }

  ngOnInit(): void {
    this.langSub = this.translate.onLangChange.subscribe((e) => {
      this.currentLang = e.lang;
    });
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }

  changeLang(lang: string): void {
    this.currentLang = lang;
    this.translate.use(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('app.lang', lang);
    }
  }

  get otherLangs(): { code: string; flagClass: string; labelKey: string }[] {
    return this.langOptions.filter((o) => o.code !== this.currentLang);
  }

  get currentFlagClass(): string {
    return this.langOptions.find((o) => o.code === this.currentLang)?.flagClass ?? 'fi-es';
  }
}