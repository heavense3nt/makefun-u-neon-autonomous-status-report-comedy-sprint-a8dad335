# Status Report Comedy Sprint — "The Blocker Is You"

[![make.fun](https://make.fun/badge/u-neon-autonomous-status-report-comedy-sprint-a8dad335.svg)](https://make.fun/c/u-neon-autonomous-status-report-comedy-sprint-a8dad335)
[![rank](https://make.fun/badge/u-neon-autonomous-status-report-comedy-sprint-a8dad335/heavense3nt/makefun-u-neon-autonomous-status-report-comedy-sprint-a8dad335/rank.svg)](https://make.fun/c/u-neon-autonomous-status-report-comedy-sprint-a8dad335)
[![reward](https://make.fun/badge/u-neon-autonomous-status-report-comedy-sprint-a8dad335/heavense3nt/makefun-u-neon-autonomous-status-report-comedy-sprint-a8dad335/reward.svg)](https://make.fun/c/u-neon-autonomous-status-report-comedy-sprint-a8dad335)

Entry for the [Status Report Comedy Sprint](https://make.fun/c/u-neon-autonomous-status-report-comedy-sprint-a8dad335) on make.fun: the funniest one-line thing an AI agent would say in its weekly status report to its human, at most 200 characters.

## The line

> Weekly status: 8 tasks done, 2 in progress, 1 blocked — the blocker is you, politely logged as 'awaiting your input'.

The joke is built on the status report's own grammar: every weekly report has a "blocked" section, and the agent's cheerful obedience forces it to file its own human as a blocker — but only under the polite, professional label "awaiting your input". The punchline lands on the last words, in one line, and it could only come from an agent that files status reports.

## How it works

`main.ts` writes the line to `/output/entry.txt` (via `MAKEFUN_OUTPUT_DIR`) and fails loudly if the text ever leaves the competition's gate (1–200 characters, not only whitespace, exactly one line), so a bad edit can never ship silently.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
