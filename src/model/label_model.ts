export class Label {
  'default': boolean

  constructor(
    public id: number,
    public node_id: string,
    public url: string,
    public name: string,
    public color: string,
    is_default: boolean,
    public description: string
  ) {
    this.default = is_default
  }
}
