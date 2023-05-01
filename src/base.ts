export abstract class BaseComponent {
  private _title: string = '';

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }
}
