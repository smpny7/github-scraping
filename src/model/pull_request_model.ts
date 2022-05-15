export class PullRequest {
  constructor(
    public url: string,
    public html_url: string,
    public diff_url: string,
    public patch_url: string,
    public merged_at: string
  ) {}
}
