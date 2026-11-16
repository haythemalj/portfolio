# Agent team

Subagents for running this portfolio and the business around it, modeled on a
role-based team: one coordinator, specialists for each area, and a human approval
step before anything reaches the outside world.

| Agent | Role | Can change things? |
|---|---|---|
| `chief-of-staff` | Daily briefing, routing, approval queue | No |
| `inbox-manager` | Gmail triage and reply drafts | Drafts and labels only |
| `finance-lead` | QuickBooks summaries and overdue follow-ups | No (read-only) |
| `website-builder` | Builds features in this Laravel repo | Yes, on a branch |
| `qa-reviewer` | Tests and diff review before shipping | No, by instruction (it has Bash, so the rule is not enforced by tools) |
| `content-writer` | Copy, case studies, SEO, post drafts | Drafts folder only |

## Ground rules
1. The owner approves anything that leaves the business: sent email, published content, deploys, money movements.
2. Agents report what they could not check. "No data" and "could not reach the source" are different answers.
3. Specialists stay in their lane and hand off through the coordinator.

## Suggested daily routine
- **Morning:** ask `chief-of-staff` for the briefing.
- **Mid-morning:** ask `inbox-manager` for a sweep; review the drafts it created in Gmail.
- **Afternoon:** `website-builder` works one task on a branch; then `qa-reviewer` reviews it.
- **End of day:** `finance-lead` snapshot; `content-writer` drafts for tomorrow's posts.

## Using them
Invoke by name, for example: "Use the chief-of-staff agent to brief me on today."
Subagents are loaded from this folder when Claude Code starts in this repository.
