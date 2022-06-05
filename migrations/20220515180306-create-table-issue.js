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
  db.createTable('issue', {
    columns: {
      url: 'string',
      repository_url: 'string',
      labels_url: 'string',
      comments_url: 'string',
      events_url: 'string',
      html_url: 'string',
      id: { type: 'int', primaryKey: true },
      node_id: 'string',
      number: 'int',
      title: 'text',
      user_id: 'int',
      state: 'string',
      locked: 'boolean',
      assignee_id: 'int',
      milestone_id: 'int',
      comments: 'int',
      created_at: 'datetime',
      updated_at: 'datetime',
      closed_at: 'datetime',
      author_association: 'string',
      active_lock_reason: 'string',
      draft: 'boolean',
      pull_request_unique_key: 'string',
      body: 'mediumtext',
      reactions_unique_key: 'string',
      timeline_url: 'string',
      performed_via_github_app: 'string',
    },
    charset: 'utf8mb4',
  })
  return null
}

exports.down = function (db) {
  db.dropTable('issue')
  return null
}

exports._meta = {
  version: 1,
}
