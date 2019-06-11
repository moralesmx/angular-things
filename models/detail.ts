export interface Detail {
  key: string;
  label: string;

  columns: Column[];
}

interface Column {
  key: string;
  header: string;
  tooltip: string;

  align: 'right' | 'center' | 'left';

  footer: string;
  // ! totalizer: 'sum' | 'avg' | 'count';

  type: 'text' | 'icon' | 'checkbox';

  format: string;
  // ? number:format:unit:locale
  // ? date:format:locale:timezone
  // ? currency:sign:locale:code:format

}
