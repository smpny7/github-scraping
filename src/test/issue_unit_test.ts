import { Issue } from '../model/issue_model'

var assert = require('assert')

describe('Issue', () => {
  const str =
    '{"url":"https://api.github.com/repos/facebook/react/issues/24560","repository_url":"https://api.github.com/repos/facebook/react","labels_url":"https://api.github.com/repos/facebook/react/issues/24560/labels{/name}","comments_url":"https://api.github.com/repos/facebook/react/issues/24560/comments","events_url":"https://api.github.com/repos/facebook/react/issues/24560/events","html_url":"https://github.com/facebook/react/issues/24560","id":1236176597,"node_id":"I_kwDOAJy2Ks5Jro7V","number":24560,"title":"Bug:  When hydrate <Suspense>, it shows loading forever.","user":{"login":"nguyenvanthanh97","id":38460321,"node_id":"MDQ6VXNlcjM4NDYwMzIx","avatar_url":"https://avatars.githubusercontent.com/u/38460321?v=4","gravatar_id":"","url":"https://api.github.com/users/nguyenvanthanh97","html_url":"https://github.com/nguyenvanthanh97","followers_url":"https://api.github.com/users/nguyenvanthanh97/followers","following_url":"https://api.github.com/users/nguyenvanthanh97/following{/other_user}","gists_url":"https://api.github.com/users/nguyenvanthanh97/gists{/gist_id}","starred_url":"https://api.github.com/users/nguyenvanthanh97/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/nguyenvanthanh97/subscriptions","organizations_url":"https://api.github.com/users/nguyenvanthanh97/orgs","repos_url":"https://api.github.com/users/nguyenvanthanh97/repos","events_url":"https://api.github.com/users/nguyenvanthanh97/events{/privacy}","received_events_url":"https://api.github.com/users/nguyenvanthanh97/received_events","type":"User","site_admin":false},"labels":[{"id":155984160,"node_id":"MDU6TGFiZWwxNTU5ODQxNjA=","url":"https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed","name":"Status: Unconfirmed","color":"d4c5f9","default":false,"description":"A potential issue that we haven\'t yet confirmed as a bug"}],"state":"open","locked":false,"assignee":null,"assignees":[],"milestone":null,"comments":0,"created_at":"2022-05-15T03:32:07Z","updated_at":"2022-05-15T03:32:07Z","closed_at":null,"author_association":"NONE","active_lock_reason":null,"draft":true,"pull_request":{"url":"https://api.github.com/repos/facebook/react/pulls/24557","html_url":"https://github.com/facebook/react/pull/24557","diff_url":"https://github.com/facebook/react/pull/24557.diff","patch_url":"https://github.com/facebook/react/pull/24557.patch","merged_at":null},"body":"After calling `hydrateRoot`, the import() function was not called. It keeps showing loading.\n\nReact version: 18.1.0\n\nLink to code example: https://codesandbox.io/embed/gracious-lederberg-nomtf0\n(For mocking server side rendering, I write content in `public/index.html`)\n\n## The current behavior\nAlways showing loading\n\n## The expected behavior\nThe component should be rendered after finishing loading.","reactions":{"url":"https://api.github.com/repos/facebook/react/issues/24560/reactions","total_count":0,"+1":0,"-1":0,"laugh":0,"hooray":0,"confused":0,"heart":0,"rocket":0,"eyes":0},"timeline_url":"https://api.github.com/repos/facebook/react/issues/24560/timeline","performed_via_github_app":null}'
  const issue: Issue = JSON.parse(
    str
      .replace(/(\r\n)/g, '\n')
      .replace(/(\r)/g, '\n')
      .replace(/(\n)/g, '\\n')
  )

  describe('JSON.parse()', () => {
    it('should have a valid url', () => {
      assert.equal(
        issue.url,
        'https://api.github.com/repos/facebook/react/issues/24560'
      )
    })
    it('should have a valid repository_url', () => {
      assert.equal(
        issue.repository_url,
        'https://api.github.com/repos/facebook/react'
      )
    })
    it('should have a valid labels_url', () => {
      assert.equal(
        issue.labels_url,
        'https://api.github.com/repos/facebook/react/issues/24560/labels{/name}'
      )
    })
    it('should have a valid comments_url', () => {
      assert.equal(
        issue.comments_url,
        'https://api.github.com/repos/facebook/react/issues/24560/comments'
      )
    })
    it('should have a valid events_url', () => {
      assert.equal(
        issue.events_url,
        'https://api.github.com/repos/facebook/react/issues/24560/events'
      )
    })
    it('should have a valid html_url', () => {
      assert.equal(
        issue.html_url,
        'https://github.com/facebook/react/issues/24560'
      )
    })
    it('should have a valid id', () => {
      assert.equal(issue.id, 1236176597)
    })
    it('should have a valid node_id', () => {
      assert.equal(issue.node_id, 'I_kwDOAJy2Ks5Jro7V')
    })
    it('should have a valid number', () => {
      assert.equal(issue.number, 24560)
    })
    it('should have a valid title', () => {
      assert.equal(
        issue.title,
        'Bug:  When hydrate <Suspense>, it shows loading forever.'
      )
    })
    it('should have a valid user', () => {
      assert.deepEqual(issue.user, {
        login: 'nguyenvanthanh97',
        id: 38460321,
        node_id: 'MDQ6VXNlcjM4NDYwMzIx',
        avatar_url: 'https://avatars.githubusercontent.com/u/38460321?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/nguyenvanthanh97',
        html_url: 'https://github.com/nguyenvanthanh97',
        followers_url:
          'https://api.github.com/users/nguyenvanthanh97/followers',
        following_url:
          'https://api.github.com/users/nguyenvanthanh97/following{/other_user}',
        gists_url:
          'https://api.github.com/users/nguyenvanthanh97/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/nguyenvanthanh97/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/nguyenvanthanh97/subscriptions',
        organizations_url: 'https://api.github.com/users/nguyenvanthanh97/orgs',
        repos_url: 'https://api.github.com/users/nguyenvanthanh97/repos',
        events_url:
          'https://api.github.com/users/nguyenvanthanh97/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/nguyenvanthanh97/received_events',
        type: 'User',
        site_admin: false,
      })
    })
    it('should have a valid labels', () => {
      assert.deepEqual(issue.labels, [
        {
          id: 155984160,
          node_id: 'MDU6TGFiZWwxNTU5ODQxNjA=',
          url: 'https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed',
          name: 'Status: Unconfirmed',
          color: 'd4c5f9',
          default: false,
          description:
            "A potential issue that we haven't yet confirmed as a bug",
        },
      ])
    })
    it('should have a valid state', () => {
      assert.equal(issue.state, 'open')
    })
    it('should have a valid locked', () => {
      assert.equal(issue.locked, false)
    })
    it('should have a valid assignee', () => {
      assert.equal(issue.assignee, null)
    })
    it('should have a valid assignees', () => {
      assert.deepEqual(issue.assignees, [])
    })
    it('should have a valid milestone', () => {
      assert.equal(issue.milestone, null)
    })
    it('should have a valid comments', () => {
      assert.equal(issue.comments, 0)
    })
    it('should have a valid created_at', () => {
      assert.equal(issue.created_at, '2022-05-15T03:32:07Z')
    })
    it('should have a valid updated_at', () => {
      assert.equal(issue.updated_at, '2022-05-15T03:32:07Z')
    })
    it('should have a valid closed_at', () => {
      assert.equal(issue.closed_at, null)
    })
    it('should have a valid author_association', () => {
      assert.equal(issue.author_association, 'NONE')
    })
    it('should have a valid active_lock_reason', () => {
      assert.equal(issue.active_lock_reason, null)
    })
    it('should have a valid draft', () => {
      assert.equal(issue.draft, true)
    })
    it('should have a valid pull_request', () => {
      assert.deepEqual(issue.pull_request, {
        url: 'https://api.github.com/repos/facebook/react/pulls/24557',
        html_url: 'https://github.com/facebook/react/pull/24557',
        diff_url: 'https://github.com/facebook/react/pull/24557.diff',
        patch_url: 'https://github.com/facebook/react/pull/24557.patch',
        merged_at: null,
      })
    })
    it('should have a valid body', () => {
      assert.equal(
        issue.body,
        'After calling `hydrateRoot`, the import() function was not called. It keeps showing loading.\n\nReact version: 18.1.0\n\nLink to code example: https://codesandbox.io/embed/gracious-lederberg-nomtf0\n(For mocking server side rendering, I write content in `public/index.html`)\n\n## The current behavior\nAlways showing loading\n\n## The expected behavior\nThe component should be rendered after finishing loading.'
      )
    })
    it('should have a valid reactions', () => {
      assert.deepEqual(issue.reactions, {
        url: 'https://api.github.com/repos/facebook/react/issues/24560/reactions',
        total_count: 0,
        '+1': 0,
        '-1': 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      })
    })
    it('should have a valid timeline_url', () => {
      assert.equal(
        issue.timeline_url,
        'https://api.github.com/repos/facebook/react/issues/24560/timeline'
      )
    })
    it('should have a valid performed_via_github_app', () => {
      assert.equal(issue.performed_via_github_app, null)
    })
  })

  describe('JSON.stringify()', () => {
    it('should convert json to a string properly', () => {
      assert.equal(
        JSON.stringify(issue),
        str
          .replace(/(\r\n)/g, '\n')
          .replace(/(\r)/g, '\n')
          .replace(/(\n)/g, '\\n')
      )
    })
  })
})
