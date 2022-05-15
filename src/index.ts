import { Octokit } from '@octokit/rest'
import 'dotenv/config'

const octokit = new Octokit({
  auth: `${process.env.GITHUB_TOKEN}`,
})

const getIssues = async (): Promise<void> => {
  const response = await octokit.request('GET /repos/{owner}/{repo}/issues', {
    owner: 'facebook',
    repo: 'react',
  })

  console.log(response.data)
}

getIssues()
