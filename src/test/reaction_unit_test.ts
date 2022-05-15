import { Reaction } from '../model/reaction_model'

var assert = require('assert')

describe('Reaction', () => {
  const str =
    '{"url":"https://api.github.com/repos/facebook/react/issues/1/reactions","total_count":2,"+1":1,"-1":0,"laugh":1,"hooray":0,"confused":0,"heart":0,"rocket":0,"eyes":0}'
  const reaction: Reaction = JSON.parse(
    str
      .replace(/(\r\n)/g, '\n')
      .replace(/(\r)/g, '\n')
      .replace(/(\n)/g, '\\n')
  )

  describe('JSON.parse()', () => {
    it('should have a valid url', () => {
      assert.equal(
        reaction.url,
        'https://api.github.com/repos/facebook/react/issues/1/reactions'
      )
    })
    it('should have a valid total_count', () => {
      assert.equal(reaction.total_count, 2)
    })
    it('should have a valid +1', () => {
      assert.equal(reaction['+1'], 1)
    })
    it('should have a valid -1', () => {
      assert.equal(reaction['-1'], 0)
    })
    it('should have a valid laugh', () => {
      assert.equal(reaction.laugh, 1)
    })
    it('should have a valid hooray', () => {
      assert.equal(reaction.hooray, 0)
    })
    it('should have a valid confused', () => {
      assert.equal(reaction.confused, 0)
    })
    it('should have a valid heart', () => {
      assert.equal(reaction.heart, 0)
    })
    it('should have a valid rocket', () => {
      assert.equal(reaction.rocket, 0)
    })
    it('should have a valid eyes', () => {
      assert.equal(reaction.eyes, 0)
    })
  })

  describe('JSON.stringify()', () => {
    it('should convert json to a string properly', () => {
      assert.equal(JSON.stringify(reaction), str)
    })
  })
})
