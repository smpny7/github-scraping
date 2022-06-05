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
  db.createTable('pull_request', {
    columns: {
      url: { type: 'string', primaryKey: true },
      id: 'int',
      node_id: 'string',
      html_url: 'string',
      diff_url: 'string',
      patch_url: 'string',
      issue_url: 'string',
      number: 'int',
      state: 'string',
      locked: 'boolean',
      title: 'string',
      user_id: 'int',
      body: 'mediumtext',
      created_at: 'datetime',
      updated_at: 'datetime',
      closed_at: 'datetime',
      merged_at: 'datetime',
      merged_commit_sha: 'string',
      assignee_id: 'int',
      milestone_id: 'int',
      draft: 'boolean',
      commits_url: 'string',
      review_comments_url: 'string',
      review_comment_url: 'string',
      comments_url: 'string',
      statuses_url: 'string',
      head_unique_key: 'string',
      links_unique_key: 'string',
      author_association: 'string',
      auto_merge: 'string',
      active_lock_reason: 'string',
      merged: 'boolean',
      mergeable: 'boolean',
      mergeable_state: 'string',
      merged_by_unique_key: 'string',
      comments: 'int',
      review_comments: 'int',
      maintainer_can_modify: 'boolean',
      commits: 'int',
      additions: 'int',
      deletions: 'int',
      changed_files: 'int',
    },
    charset: 'utf8mb4',
  })
  return null
}

exports.down = function (db) {
  db.dropTable('pull_request')
  return null
}

exports._meta = {
  version: 1,
}
