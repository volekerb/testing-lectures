# Facilitator guide: testing foundations

[Русский](foundations.ru.md) · [Source review and coverage](lecture-01-source-map.md)

Audience: programming students and junior QA engineers. The full first lecture now
preserves the source course's breadth. The registration exercise is supporting
practice. Main outcomes: explain lifecycle and ownership, choose test boundaries,
plan by risk, design cases, investigate defects and report honest evidence.

## Two teaching sessions

Estimated pacing, not yet classroom-validated. Use the prompts and localized speaker
notes in all 48 slides. Take a break after slide 24; the two sessions may be held on
separate days. Main homework preparation is additional to these 150 minutes.

| Session | Slides | Minutes | Activity |
| --- | --- | --- | --- |
| 1 | 1-4 | 8 | Diagnostic, questions, oracle and testing scope |
| 1 | 5-8 | 12 | Business story, requirements and roles |
| 1 | 9-15 | 20 | Lifecycle models, pipeline and operational feedback |
| 1 | 16-19 | 15 | Responsibilities, skills, environments and state collision |
| 1 | 20-24 | 20 | Independent classification axes; backend E2E question |
| 2 | 25-27 | 12 | Risk, lean planning and a reproducible case |
| 2 | 28-33 | 20 | Worked design techniques and artifact choice |
| 2 | 34-38 | 15 | Suites, flakiness, defect reports and fix verification |
| 2 | 39-43 | 13 | Reporting, test value, tools, platforms and resilience |
| 2 | 44-48 | 15 | Roadmap, assignments, exit discussion and sources |

For every reveal, ask for a prediction or explanation before advancing. The
lifecycle, pipeline, boundary, test scope and defect workflow animate at the pace
of the discussion. Right arrow/Space reveals; Left arrow reverses. Language
switching preserves slide number and restarts reveals. Reduced motion preserves
content without transitions. The reading contains the complete static explanation.

## Main assignment: retain the original 20 cases

The original PDF page 37 asks for 20 cases for a website. Require a defined product
boundary, a lean plan with three prioritized risks, 20 distinct cases, mappings to
rules and techniques, honest execution status and a bounded release recommendation.
Include positive/negative scenarios, boundaries, an interaction and a quality
attribute. The reading is the complete assignment specification.

Grade out of 10: scope/oracle 2; meaningful selection 3; reproducibility 2; honest
evidence/reporting 2; justified priority 1. Do not reward repeated arbitrary values
as distinct ideas. Accept either language. Designed-only cases must be marked not
run; do not require students to fabricate a bug. Use owned, local or permitted
applications. A safe executable smoke subset is useful when feasible.

Discussion keys: correct rejection means a negative case passes; an API journey
can be E2E for a declared backend boundary; a simulated payment provider limits the
claim; confirmation checks the specific fix while regression checks affected
behavior; blocked and not-run are not passes. The 14/16 and 14/20 example has different
denominators, and neither percentage establishes risk coverage.

## Supporting registration lab: 35 minutes

Use 5 minutes to predict/run, 10 to capture failure, 10 to fix/check, 10 to report.
The starter suite deliberately passes; the contract checker deliberately fails two
equality examples. Do not repair the teaching fixture in the published source.

The lab's separate 10-point rubric has five two-point criteria: predictions/oracle;
meaningful failure; minimal fix/passing checks; reproducible report; two untested
risks with a justified next check. Stronger learners can propose an atomic
reservation test; implementation of database concurrency is outside this lab.
This supporting exercise does not replace the main assignment.

## Sources and corrections

The source map documents the review method, all PDF pages and video timestamps.
The full automatic transcript and rendered PDF were reviewed, plus two video frames;
there was no continuous audiovisual viewing. Captions may misrecognize tool names.

Preserve roles versus titles, requirements beyond written specifications,
environment ownership, test isolation, reporting and the closing integration/E2E
question. Clarify Agile versus Scrum, iterative versus incremental versus spiral,
negative-case outcomes, current browser-engine diversity, and why always-green
tests cannot be removed based on pass frequency alone. Do not repeat dated job
market promises or present historical tools as current recommendations.

## Acceptance and classroom feedback

- Same outcomes, assignment, examples, slide IDs and assessment in both languages.
- Home, reading, source map, slides, lab, walkthrough and archive links work.
- All 48 slides fit at projection size after every reveal; EN/RU switching is aligned.
- Keyboard, mobile reading, light/dark themes and reduced motion remain usable.
- Downloaded lab works without dependencies and supports the failure/fix loop.
- Later modules and the LLM extension are clearly planned.

Record actual pacing, where learners hesitate, whether the 20 cases show deliberate
selection, scope misconceptions, and translation issues. Adjust after the first
classroom trial before calling the timing validated.
