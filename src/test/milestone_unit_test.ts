import { Milestone } from '../model/milestone_model'

var assert = require('assert')

describe('Milestone', () => {
  const str =
    '{"url":"https://api.github.com/repos/smpny7/jokura-vue/milestones/1","html_url":"https://github.com/smpny7/jokura-vue/milestone/1","labels_url":"https://api.github.com/repos/smpny7/jokura-vue/milestones/1/labels","id":7981642,"node_id":"MI_kwDOEb4mOM4AecpK","number":1,"title":"Sample","description":"Sample Description","creator":{"login":"smpny7","id":58544849,"node_id":"MDQ6VXNlcjU4NTQ0ODQ5","avatar_url":"https://avatars.githubusercontent.com/u/58544849?v=4","gravatar_id":"","url":"https://api.github.com/users/smpny7","html_url":"https://github.com/smpny7","followers_url":"https://api.github.com/users/smpny7/followers","following_url":"https://api.github.com/users/smpny7/following{/other_user}","gists_url":"https://api.github.com/users/smpny7/gists{/gist_id}","starred_url":"https://api.github.com/users/smpny7/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/smpny7/subscriptions","organizations_url":"https://api.github.com/users/smpny7/orgs","repos_url":"https://api.github.com/users/smpny7/repos","events_url":"https://api.github.com/users/smpny7/events{/privacy}","received_events_url":"https://api.github.com/users/smpny7/received_events","type":"User","site_admin":false},"open_issues":1,"closed_issues":0,"state":"open","created_at":"2022-05-15T07:23:13Z","updated_at":"2022-05-15T07:23:45Z","due_on":"2022-05-15T07:00:00Z","closed_at":null}'
  const milestone: Milestone = JSON.parse(
    str
      .replace(/(\r\n)/g, '\n')
      .replace(/(\r)/g, '\n')
      .replace(/(\n)/g, '\\n')
  )

  describe('JSON.parse()', () => {
    it('should have a valid url', () => {
      assert.equal(
        milestone.url,
        'https://api.github.com/repos/smpny7/jokura-vue/milestones/1'
      )
    })
    it('should have a valid html_url', () => {
      assert.equal(
        milestone.html_url,
        'https://github.com/smpny7/jokura-vue/milestone/1'
      )
    })
    it('should have a valid labels_url', () => {
      assert.equal(
        milestone.labels_url,
        'https://api.github.com/repos/smpny7/jokura-vue/milestones/1/labels'
      )
    })
    it('should have a valid id', () => {
      assert.equal(milestone.id, 7981642)
    })
    it('should have a valid node_id', () => {
      assert.equal(milestone.node_id, 'MI_kwDOEb4mOM4AecpK')
    })
    it('should have a valid number', () => {
      assert.equal(milestone.number, 1)
    })
    it('should have a valid title', () => {
      assert.equal(milestone.title, 'Sample')
    })
    it('should have a valid description', () => {
      assert.equal(milestone.description, 'Sample Description')
    })
    it('should have a valid creator', () => {
      assert.deepEqual(milestone.creator, {
        login: 'smpny7',
        id: 58544849,
        node_id: 'MDQ6VXNlcjU4NTQ0ODQ5',
        avatar_url: 'https://avatars.githubusercontent.com/u/58544849?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/smpny7',
        html_url: 'https://github.com/smpny7',
        followers_url: 'https://api.github.com/users/smpny7/followers',
        following_url:
          'https://api.github.com/users/smpny7/following{/other_user}',
        gists_url: 'https://api.github.com/users/smpny7/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/smpny7/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/smpny7/subscriptions',
        organizations_url: 'https://api.github.com/users/smpny7/orgs',
        repos_url: 'https://api.github.com/users/smpny7/repos',
        events_url: 'https://api.github.com/users/smpny7/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/smpny7/received_events',
        type: 'User',
        site_admin: false,
      })
    })
    it('should have a valid open_issues', () => {
      assert.equal(milestone.open_issues, 1)
    })
    it('should have a valid closed_issues', () => {
      assert.equal(milestone.closed_issues, 0)
    })
    it('should have a valid state', () => {
      assert.equal(milestone.state, 'open')
    })
    it('should have a valid created_at', () => {
      assert.equal(milestone.created_at, '2022-05-15T07:23:13Z')
    })
    it('should have a valid updated_at', () => {
      assert.equal(milestone.updated_at, '2022-05-15T07:23:45Z')
    })
    it('should have a valid due_on', () => {
      assert.equal(milestone.due_on, '2022-05-15T07:00:00Z')
    })
    it('should have a valid closed_at', () => {
      assert.equal(milestone.closed_at, null)
    })
  })

  describe('JSON.stringify()', () => {
    it('should convert json to a string properly', () => {
      assert.equal(JSON.stringify(milestone), str)
    })
  })
})
