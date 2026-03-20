import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ElementRef,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface LocationOption {
  code: string;
  label: string;
}

export type LocationState = 'default' | 'hover' | 'unfolded';

export const COUNTRIES: LocationOption[] = [
  { code: 'ES', label: 'España' },
  { code: 'PT', label: 'Portugal' },
  { code: 'MX', label: 'México' },
  { code: 'BR', label: 'Brasil' },
  { code: 'CO', label: 'Colombia' },
  { code: 'AR', label: 'Argentina' },
];

export const LANGUAGES: LocationOption[] = [
  { code: 'ES', label: 'Español' },
  { code: 'PT', label: 'Português' },
  { code: 'EN', label: 'English' },
  { code: 'FR', label: 'Français' },
  { code: 'DE', label: 'Deutsch' },
];

@Component({
  selector: 'app-location-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location-selector.component.html',
  styleUrls: ['./location-selector.component.scss'],
})
export class LocationSelectorComponent implements OnInit {
  /** País seleccionado */
  @Input() selectedCountry: LocationOption = COUNTRIES[0];

  /** Idioma seleccionado */
  @Input() selectedLanguage: LocationOption = LANGUAGES[0];

  /** Lista de países disponibles */
  @Input() countries: LocationOption[] = COUNTRIES;

  /** Lista de idiomas disponibles */
  @Input() languages: LocationOption[] = LANGUAGES;

  /** Deshabilitar interacción */
  @Input() disabled = false;

  /** Emite cuando cambia el país */
  @Output() countryChange = new EventEmitter<LocationOption>();

  /** Emite cuando cambia el idioma */
  @Output() languageChange = new EventEmitter<LocationOption>();

  isCountryOpen = false;
  isLanguageOpen = false;

  countryHovered = false;
  languageHovered = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  get countryState(): LocationState {
    if (this.isCountryOpen) return 'unfolded';
    if (this.countryHovered) return 'hover';
    return 'default';
  }

  get languageState(): LocationState {
    if (this.isLanguageOpen) return 'unfolded';
    if (this.languageHovered) return 'hover';
    return 'default';
  }

  toggleCountry(): void {
    if (this.disabled) return;
    this.isCountryOpen = !this.isCountryOpen;
    this.isLanguageOpen = false;
  }

  toggleLanguage(): void {
    if (this.disabled) return;
    this.isLanguageOpen = !this.isLanguageOpen;
    this.isCountryOpen = false;
  }

  selectCountry(country: LocationOption): void {
    this.selectedCountry = country;
    this.isCountryOpen = false;
    this.countryChange.emit(country);
  }

  selectLanguage(language: LocationOption): void {
    this.selectedLanguage = language;
    this.isLanguageOpen = false;
    this.languageChange.emit(language);
  }

  isCountrySelected(country: LocationOption): boolean {
    return this.selectedCountry.code === country.code;
  }

  isLanguageSelected(language: LocationOption): boolean {
    return this.selectedLanguage.code === language.code;
  }

  /** Cierra dropdowns al hacer clic fuera del componente */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isCountryOpen = false;
      this.isLanguageOpen = false;
    }
  }

  /** Cierra con Escape */
  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.isCountryOpen = false;
    this.isLanguageOpen = false;
  }
}
