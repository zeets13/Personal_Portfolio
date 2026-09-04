import { Octokit } from "octokit";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    await octokit.rest.actions.createWorkflowDispatch({
      owner: process.env.GITHUB_OWNER,
      repo: process.env.GITHUB_REPO,
      workflow_id: "playwright.yml",
      ref: "main",
    });

    return res.status(200).json({
      success: true,
      message: "QA test suite started successfully",
    });
  } catch (error) {
    console.error("Failed to trigger workflow:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to start the QA test suite",
    });
  }
}