import { PullRequest } from '../model/pull_request_model'

var assert = require('assert')

describe('PullRequest', () => {
  const str =
    '{"url":"https://api.github.com/repos/facebook/react/pulls/24557","html_url":"https://github.com/facebook/react/pull/24557","diff_url":"https://github.com/facebook/react/pull/24557.diff","patch_url":"https://github.com/facebook/react/pull/24557.patch","merged_at":null}'
  const pull_request: PullRequest = JSON.parse(
    str
      .replace(/(\r\n)/g, '\n')
      .replace(/(\r)/g, '\n')
      .replace(/(\n)/g, '\\n')
  )

  describe('JSON.parse()', () => {
    it('should have a valid url', () => {
      assert.equal(
        pull_request.url,
        'https://api.github.com/repos/facebook/react/pulls/24557'
      )
    })
    it('should have a valid html_url', () => {
      assert.equal(
        pull_request.html_url,
        'https://github.com/facebook/react/pull/24557'
      )
    })
    it('should have a valid diff_url', () => {
      assert.equal(
        pull_request.diff_url,
        'https://github.com/facebook/react/pull/24557.diff'
      )
    })
    it('should have a valid patch_url', () => {
      assert.equal(
        pull_request.patch_url,
        'https://github.com/facebook/react/pull/24557.patch'
      )
    })
    it('should have a valid merged_at', () => {
      assert.equal(pull_request.merged_at, null)
    })
  })

  describe('JSON.stringify()', () => {
    it('should convert json to a string properly', () => {
      assert.equal(JSON.stringify(pull_request), str)
    })
  })
})
