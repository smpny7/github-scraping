import { User } from './user_model'

export class Milestone {
  constructor(
    public url: string,
    public html_url: string,
    public labels_url: string,
    public id: number,
    public node_id: string,
    public number: number,
    public title: string,
    public description: string,
    public creator: User,
    public open_issues: number,
    public closed_issues: number,
    public state: string,
    public created_at: string,
    public updated_at: string,
    public due_on: string,
    public closed_at: string
  ) {}
}
