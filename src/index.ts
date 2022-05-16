import { Octokit } from '@octokit/rest'
import 'dotenv/config'
import mysql from 'mysql2/promise'
import { Issue } from './model/issue_model'

const octokit = new Octokit({
  auth: `${process.env.GITHUB_TOKEN}`,
})

function delay(n: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, n * 1000)
  })
}

const getIssues = async (
  page: number,
  connection: mysql.Connection
): Promise<void> => {
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

  await insertIssue(data, connection)
}

const insertIssue = async (
  data: Issue[],
  connection: mysql.Connection
): Promise<void> => {
  ;(async () => {
    for (let issue of data) {
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
        created_at:
          issue.created_at === null
            ? null
            : new Date(issue.created_at).toLocaleString(),
        updated_at:
          issue.updated_at === null
            ? null
            : new Date(issue.updated_at).toLocaleString(),
        closed_at:
          issue.closed_at === null
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

      await connection.query('INSERT INTO `issue` set ?', row)
    }
  })()
}

;(async () => {
  const connection = await mysql.createConnection({
    host: `${process.env.MYSQL_HOST}`,
    user: `${process.env.MYSQL_USER}`,
    password: `${process.env.MYSQL_PASSWORD}`,
    database: `${process.env.MYSQL_DATABASE}`,
  })

  for (let num of [...Array(150)].map((_, i) => i)) {
    await getIssues(num + 1, connection)
    console.log(`${num + 1}/150 completed`)
  }
})()
