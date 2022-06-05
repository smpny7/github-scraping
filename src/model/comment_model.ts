import { Reaction } from './reaction_model'
import { User } from './user_model'

export class Comment {
  constructor(
    public url: string,
    public html_url: string,
    public issue_url: string,
    public id: number,
    public node_id: string,
    public user: User,
    public created_at: string,
    public updated_at: string,
    public author_association: string,
    public body: string,
    public reactions: Reaction,
    public performed_via_github_app: string
  ) {}
}
