import { User } from '../model/user_model'

var assert = require('assert')

describe('User', () => {
  const str =
    '{"login":"dependabot[bot]","id":49699333,"node_id":"MDM6Qm90NDk2OTkzMzM=","avatar_url":"https://avatars.githubusercontent.com/in/29110?v=4","gravatar_id":"","url":"https://api.github.com/users/dependabot%5Bbot%5D","html_url":"https://github.com/apps/dependabot","followers_url":"https://api.github.com/users/dependabot%5Bbot%5D/followers","following_url":"https://api.github.com/users/dependabot%5Bbot%5D/following{/other_user}","gists_url":"https://api.github.com/users/dependabot%5Bbot%5D/gists{/gist_id}","starred_url":"https://api.github.com/users/dependabot%5Bbot%5D/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/dependabot%5Bbot%5D/subscriptions","organizations_url":"https://api.github.com/users/dependabot%5Bbot%5D/orgs","repos_url":"https://api.github.com/users/dependabot%5Bbot%5D/repos","events_url":"https://api.github.com/users/dependabot%5Bbot%5D/events{/privacy}","received_events_url":"https://api.github.com/users/dependabot%5Bbot%5D/received_events","type":"Bot","site_admin":false}'
  const user: User = JSON.parse(
    str
      .replace(/(\r\n)/g, '\n')
      .replace(/(\r)/g, '\n')
      .replace(/(\n)/g, '\\n')
  )

  describe('JSON.parse()', () => {
    it('should have a valid login', () => {
      assert.equal(user.login, 'dependabot[bot]')
    })
    it('should have a valid id', () => {
      assert.equal(user.id, 49699333)
    })
    it('should have a valid node_id', () => {
      assert.equal(user.node_id, 'MDM6Qm90NDk2OTkzMzM=')
    })
    it('should have a valid avatar_url', () => {
      assert.equal(
        user.avatar_url,
        'https://avatars.githubusercontent.com/in/29110?v=4'
      )
    })
    it('should have a valid gravatar_id', () => {
      assert.equal(user.gravatar_id, '')
    })
    it('should have a valid url', () => {
      assert.equal(user.url, 'https://api.github.com/users/dependabot%5Bbot%5D')
    })
    it('should have a valid html_url', () => {
      assert.equal(user.html_url, 'https://github.com/apps/dependabot')
    })
    it('should have a valid followers_url', () => {
      assert.equal(
        user.followers_url,
        'https://api.github.com/users/dependabot%5Bbot%5D/followers'
      )
    })
    it('should have a valid following_url', () => {
      assert.equal(
        user.following_url,
        'https://api.github.com/users/dependabot%5Bbot%5D/following{/other_user}'
      )
    })
    it('should have a valid gists_url', () => {
      assert.equal(
        user.gists_url,
        'https://api.github.com/users/dependabot%5Bbot%5D/gists{/gist_id}'
      )
    })
    it('should have a valid starred_url', () => {
      assert.equal(
        user.starred_url,
        'https://api.github.com/users/dependabot%5Bbot%5D/starred{/owner}{/repo}'
      )
    })
    it('should have a valid subscriptions_url', () => {
      assert.equal(
        user.subscriptions_url,
        'https://api.github.com/users/dependabot%5Bbot%5D/subscriptions'
      )
    })
    it('should have a valid organizations_url', () => {
      assert.equal(
        user.organizations_url,
        'https://api.github.com/users/dependabot%5Bbot%5D/orgs'
      )
    })
    it('should have a valid repos_url', () => {
      assert.equal(
        user.repos_url,
        'https://api.github.com/users/dependabot%5Bbot%5D/repos'
      )
    })
    it('should have a valid events_url', () => {
      assert.equal(
        user.events_url,
        'https://api.github.com/users/dependabot%5Bbot%5D/events{/privacy}'
      )
    })
    it('should have a valid received_events_url', () => {
      assert.equal(
        user.received_events_url,
        'https://api.github.com/users/dependabot%5Bbot%5D/received_events'
      )
    })
    it('should have a valid type', () => {
      assert.equal(user.type, 'Bot')
    })
    it('should have a valid site_admin', () => {
      assert.equal(user.site_admin, false)
    })
  })

  describe('JSON.stringify()', () => {
    it('should convert json to a string properly', () => {
      assert.equal(JSON.stringify(user), str)
    })
  })
})
