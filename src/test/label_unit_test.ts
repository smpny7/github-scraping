import { Label } from '../model/label_model'

var assert = require('assert')

describe('Label', () => {
  const str =
    '{"id":155984160,"node_id":"MDU6TGFiZWwxNTU5ODQxNjA=","url":"https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed","name":"Status: Unconfirmed","color":"d4c5f9","default":false,"description":"A potential issue that we haven\'t yet confirmed as a bug"}'
  const label: Label = JSON.parse(
    str
      .replace(/(\r\n)/g, '\n')
      .replace(/(\r)/g, '\n')
      .replace(/(\n)/g, '\\n')
  )

  describe('JSON.parse()', () => {
    it('should have a valid id', () => {
      assert.equal(label.id, 155984160)
    })
    it('should have a valid node_id', () => {
      assert.equal(label.node_id, 'MDU6TGFiZWwxNTU5ODQxNjA=')
    })
    it('should have a valid url', () => {
      assert.equal(
        label.url,
        'https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed'
      )
    })
    it('should have a valid name', () => {
      assert.equal(label.name, 'Status: Unconfirmed')
    })
    it('should have a valid color', () => {
      assert.equal(label.color, 'd4c5f9')
    })
    it('should have a valid default', () => {
      assert.equal(label.default, false)
    })
    it('should have a valid description', () => {
      assert.equal(
        label.description,
        "A potential issue that we haven't yet confirmed as a bug"
      )
    })
  })

  describe('JSON.stringify()', () => {
    it('should convert json to a string properly', () => {
      assert.equal(JSON.stringify(label), str)
    })
  })
})
