import { Label } from './label_model'
import { Milestone } from './milestone_model'
import { Reaction } from './reaction_model'
import { User } from './user_model'

export class Issue {
  constructor(
    public url: string,
    public repository_url: string,
    public labels_url: string,
    public comments_url: string,
    public events_url: string,
    public html_url: string,
    public id: number,
    public node_id: string,
    public number: number,
    public title: string,
    public user: User,
    public labels: Label[],
    public state: string,
    public locked: boolean,
    public assignee: User,
    public assignees: User[],
    public milestone: Milestone,
    public comments: number,
    public created_at: string,
    public updated_at: string,
    public closed_at: string,
    public author_association: string,
    public active_lock_reason: string,
    public draft: boolean,
    public pull_request: PullRequest,
    public body: string,
    public reactions: Reaction,
    public timeline_url: string,
    public performed_via_github_app: string
  ) {}
}

class PullRequest {
  constructor(
    public url: string,
    public html_url: string,
    public diff_url: string,
    public patch_url: string,
    public merged_at: string
  ) {}
}
