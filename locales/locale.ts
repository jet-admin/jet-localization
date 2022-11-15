export interface LocaleItem {
  source: string | { label: string; context?: string };
  target: string;
}

export interface Locale {
  name: string;
  language: string;
  hidden?: boolean;
  items: LocaleItem[];
}
