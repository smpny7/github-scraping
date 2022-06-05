import { Label } from './label_model'
import { Milestone } from './milestone_model'
import { User } from './user_model'

export class PullRequest {
  constructor(
    public url: string,
    public id: number,
    public node_id: string,
    public html_url: string,
    public diff_url: string,
    public patch_url: string,
    public issue_url: string,
    public number: number,
    public state: string,
    public locked: boolean,
    public title: string,
    public user: User,
    public body: string,
    public created_at: string,
    public updated_at: string,
    public closed_at: string,
    public merged_at: string,
    public merged_commit_sha: string,
    public assignee: User,
    public assignees: User[],
    public requested_reviewers: User[],
    public requested_teams: User[],
    public labels: Label[],
    public milestone: Milestone,
    public draft: boolean,
    public commits_url: string,
    public review_comments_url: string,
    public review_comment_url: string,
    public comments_url: string,
    public statuses_url: string,
    public head: Head,
    public _links: Links,
    public author_association: string,
    public auto_merge: string,
    public active_lock_reason: string,
    public merged: boolean,
    public mergeable: boolean,
    public mergeable_state: string,
    public merged_by: User,
    public comments: number,
    public review_comments: number,
    public maintainer_can_modify: boolean,
    public commits: number,
    public additions: number,
    public deletions: number,
    public changed_files: number
  ) {}
}

class Head {
  constructor(
    public label: string,
    public ref: string,
    public sha: string,
    public user: User,
    public repo: Repo
  ) {}
}

class Repo {
  'private': boolean

  constructor(
    public id: number,
    public node_id: string,
    public name: string,
    public full_name: string,
    is_private: boolean,
    public owner: User,
    public html_url: string,
    public description: string,
    public fork: boolean,
    public url: string,
    public forks_url: string,
    public keys_url: string,
    public collaborators_url: string,
    public teams_url: string,
    public hooks_url: string,
    public issue_events_url: string,
    public events_url: string,
    public assignees_url: string,
    public branches_url: string,
    public tags_url: string,
    public blobs_url: string,
    public git_tags_url: string,
    public git_refs_url: string,
    public trees_url: string,
    public statuses_url: string,
    public languages_url: string,
    public stargazers_url: string,
    public contributors_url: string,
    public subscribers_url: string,
    public subscription_url: string,
    public commits_url: string,
    public git_commits_url: string,
    public comments_url: string,
    public issue_comment_url: string,
    public contents_url: string,
    public compare_url: string,
    public merges_url: string,
    public archive_url: string,
    public downloads_url: string,
    public issues_url: string,
    public pulls_url: string,
    public milestones_url: string,
    public notifications_url: string,
    public labels_url: string,
    public releases_url: string,
    public deployments_url: string,
    public created_at: string,
    public updated_at: string,
    public pushed_at: string,
    public git_url: string,
    public ssh_url: string,
    public clone_url: string,
    public svn_url: string,
    public homepage: string,
    public size: number,
    public stargazers_count: number,
    public watchers_count: number,
    public language: string,
    public has_issues: boolean,
    public has_projects: boolean,
    public has_downloads: boolean,
    public has_wiki: boolean,
    public has_pages: boolean,
    public forks_count: number,
    public mirror_url: string,
    public archived: boolean,
    public disabled: boolean,
    public open_issues_count: number,
    public license: License,
    public allow_forking: boolean,
    public is_template: boolean,
    public topics: string[],
    public visibility: string,
    public forks: number,
    public open_issues: number,
    public watchers: number,
    public default_branch: string
  ) {
    this.private = is_private
  }
}

class License {
  constructor(
    public key: string,
    public name: string,
    public spdx_id: string,
    public url: string,
    public node_id: string
  ) {}
}

class Links {
  constructor(
    public self: Self,
    public html: Html,
    public issue: Issue,
    public comments: Comments,
    public review_comments: ReviewComments,
    public review_comment: ReviewComment,
    public commits: Commits,
    public statuses: Statuses
  ) {}
}

class Self {
  constructor(public href: string) {}
}

class Html {
  constructor(public href: string) {}
}

class Issue {
  constructor(public href: string) {}
}

class Comments {
  constructor(public href: string) {}
}

class ReviewComments {
  constructor(public href: string) {}
}

class ReviewComment {
  constructor(public href: string) {}
}

class Commits {
  constructor(public href: string) {}
}

class Statuses {
  constructor(public href: string) {}
}
