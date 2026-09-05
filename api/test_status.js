import { Octokit } from "octokit";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    const { data } = await octokit.rest.actions.listWorkflowRuns({
      owner: process.env.GITHUB_OWNER,
      repo: process.env.GITHUB_REPO,
      workflow_id: "playwright.yml",
      event: "workflow_dispatch",
      per_page: 1,
    });

    const workflow = data.workflow_runs[0];

    if (!workflow) {
      return res.status(404).json({
        message: "No workflow found",
      });
    }

    return res.status(200).json({
      status: workflow.status,
      conclusion: workflow.conclusion,
      url: workflow.html_url,
    });

  } catch (error) {
    console.error("GitHub status error:", error);

    return res.status(500).json({
      message: "Failed to fetch workflow status",
    });
  }
}