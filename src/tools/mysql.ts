import 'dotenv/config'
import mysql from 'mysql2/promise'

export class MySQL {
  constructor(private connection: any = undefined) {}

  public createConnection = async () => {
    const connection = await mysql.createConnection({
      host: `${process.env.MYSQL_HOST}`,
      user: `${process.env.MYSQL_USER}`,
      password: `${process.env.MYSQL_PASSWORD}`,
      database: `${process.env.MYSQL_DATABASE}`,
    })

    return new MySQL(connection)
  }

  public insert = async (table: string, row: object) =>
    await this.connection.query(`INSERT INTO ${table} SET ?`, row)

  public getIssuesWithPullRequests = async () => {
    const response = await this.connection.query(
      `SELECT * FROM issue WHERE pull_request_unique_key IS NOT NULL`
    )

    return response[0]
  }

  public getIssuesWithAssigned = async () => {
    const response = await this.connection.query(
      `SELECT * FROM issue WHERE assignee_id IS NOT NULL AND pull_request_unique_key IS NOT NULL`
    )

    return response[0]
  }

  public getPullRequestFromUrl = async (url: string) => {
    const response = await this.connection.query(
      `SELECT * FROM pull_request WHERE url = ?`,
      [url]
    )

    return response[0][0]
  }
}
