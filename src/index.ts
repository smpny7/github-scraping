import { Octokit } from '@octokit/rest'
import axios from 'axios'
import 'dotenv/config'
import { Issue } from './model/issue_model'
import { PullRequest } from './model/pull_request_model'
import { MySQL } from './tools/mysql'

const octokit = new Octokit({
  auth: `${process.env.GITHUB_TOKEN}`,
})

const getIssues = async (page: number): Promise<Issue[]> => {
  const response = await octokit.request('GET /repos/{owner}/{repo}/issues', {
    owner: 'facebook',
    repo: 'react',
    page: page,
    per_page: 100,
    state: 'all',
  })

  console.log(
    `[Request limit: ${response.headers['x-ratelimit-remaining']} / ${response.headers['x-ratelimit-limit']}]`
  )

  const data: Issue[] = response.data as any

  return data
}

const getPullRequest = async (url: string) => {
  try {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    })

    console.log(
      `[Request limit: ${response.headers['x-ratelimit-remaining']} / ${response.headers['x-ratelimit-limit']}]`
    )

    const data: PullRequest = response.data as any
    return data
  } catch (_) {
    console.log(`${url} is not a valid url`)
  }
}

const fetchIssues = async () => {
  const mysql = await new MySQL().createConnection()

  for (let num of [...Array(250)].map((_, i) => i)) {
    const issues = await getIssues(num + 1)

    ;(async () => {
      for (let issue of issues) {
        const row = {
          id: issue.id,
          url: issue.url,
          repository_url: issue.repository_url,
          labels_url: issue.labels_url,
          comments_url: issue.comments_url,
          events_url: issue.events_url,
          html_url: issue.html_url,
          node_id: issue.node_id,
          number: issue.number,
          title: issue.title,
          user_id: issue.user?.id,
          state: issue.state,
          locked: issue.locked,
          assignee_id: issue.assignee?.id,
          milestone_id: issue.milestone?.id,
          comments: issue.comments,
          created_at: !issue.created_at
            ? null
            : new Date(issue.created_at).toLocaleString(),
          updated_at: !issue.updated_at
            ? null
            : new Date(issue.updated_at).toLocaleString(),
          closed_at: !issue.closed_at
            ? null
            : new Date(issue.closed_at).toLocaleString(),
          author_association: issue.author_association,
          active_lock_reason: issue.active_lock_reason,
          draft: issue.draft,
          pull_request_unique_key: issue.pull_request?.url,
          body: issue.body,
          reactions_unique_key: issue.reactions?.url,
          timeline_url: issue.timeline_url,
          performed_via_github_app: issue.performed_via_github_app,
        }

        await mysql.insert('issue', row)
      }
    })()

    console.log(`${num + 1}/250 completed`)
  }
}

const getPullRequests = async () => {
  const mysql = await new MySQL().createConnection()
  const issues = await mysql.getIssuesWithPullRequests()

  ;async () => {
    for (let issue of issues) {
      const pullRequest = await getPullRequest(issue.pull_request_unique_key)
      if (pullRequest) {
        const row = {
          url: pullRequest.url,
          id: pullRequest.id,
          node_id: pullRequest.node_id,
          html_url: pullRequest.html_url,
          diff_url: pullRequest.diff_url,
          patch_url: pullRequest.patch_url,
          issue_url: pullRequest.issue_url,
          number: pullRequest.number,
          state: pullRequest.state,
          locked: pullRequest.locked,
          title: pullRequest.title,
          user_id: pullRequest.user?.id,
          body: pullRequest.body,
          created_at: !pullRequest.created_at
            ? null
            : new Date(pullRequest.created_at).toLocaleString(),
          updated_at: !pullRequest.updated_at
            ? null
            : new Date(pullRequest.updated_at).toLocaleString(),
          closed_at: pullRequest.closed_at
            ? null
            : new Date(pullRequest.closed_at).toLocaleString(),
          merged_at: !pullRequest.merged_at
            ? null
            : new Date(pullRequest.merged_at).toLocaleString(),
          merged_commit_sha: pullRequest.merged_commit_sha,
          assignee_id: pullRequest.assignee?.id,
          milestone_id: pullRequest.milestone?.id,
          draft: pullRequest.draft,
          commits_url: pullRequest.commits_url,
          review_comments_url: pullRequest.review_comments_url,
          review_comment_url: pullRequest.review_comment_url,
          comments_url: pullRequest.comments_url,
          statuses_url: pullRequest.statuses_url,
          head_unique_key: pullRequest.head?.sha,
          links_unique_key: pullRequest._links?.self?.href,
          author_association: pullRequest.author_association,
          auto_merge: pullRequest.auto_merge,
          active_lock_reason: pullRequest.active_lock_reason,
          merged: pullRequest.merged,
          mergeable: pullRequest.mergeable,
          mergeable_state: pullRequest.mergeable_state,
          merged_by_unique_key: pullRequest.merged_by?.id,
          comments: pullRequest.comments,
          review_comments: pullRequest.review_comments,
          maintainer_can_modify: pullRequest.maintainer_can_modify,
          commits: pullRequest.commits,
          additions: pullRequest.additions,
          deletions: pullRequest.deletions,
          changed_files: pullRequest.changed_files,
        }

        await mysql.insert('pull_request', row)
      }
    }
  }
}

;(async () => {
  const mysql = await new MySQL().createConnection()
  const issues = await mysql.getIssuesWithAssigned()

  ;(async () => {
    for (let issue of issues) {
      const pull_request = await mysql.getPullRequestFromUrl(
        issue.pull_request_unique_key
      )

      const row = {
        pull_request_id: pull_request.url,
        issue_id: issue.id,
        user_id: issue.assignee_id,
        is_self_merged: pull_request.merged_by_unique_key == issue.assignee_id,
      }

      await mysql.insert('issue_pull_request', row)
    }
  })()
})()
