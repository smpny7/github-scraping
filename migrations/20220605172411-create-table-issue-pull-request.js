'use strict'

var dbm
var type
var seed

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate
  type = dbm.dataType
  seed = seedLink
}

exports.up = function (db) {
  db.createTable('issue_pull_request', {
    columns: {
      pull_request_id: 'string',
      issue_id: 'int',
      user_id: 'string',
      is_self_merged: 'boolean',
    },
    charset: 'utf8mb4',
  })
  return null
}

exports.down = function (db) {
  db.dropTable('issue_pull_request')
  return null
}

exports._meta = {
  version: 1,
}
