export class Reaction {
  '+1': number
  '-1': number

  constructor(
    public url: string,
    public total_count: number,
    plus: number,
    minus: number,
    public laugh: number,
    public hooray: number,
    public confused: number,
    public heart: number,
    public rocket: number,
    public eyes: number
  ) {
    this['+1'] = plus
    this['-1'] = minus
  }
}
