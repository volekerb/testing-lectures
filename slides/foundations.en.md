---
theme: default
title: "Testing foundations"
info: "Testing foundations / Основы тестирования"
author: "Testing lectures"
colorSchema: light
transition: fade
routerMode: hash
aspectRatio: 16/9
canvasWidth: 980
fonts:
  sans: IBM Plex Sans
  mono: IBM Plex Mono
  local: IBM Plex Sans, IBM Plex Mono
  provider: none
htmlAttrs:
  lang: en
drawings:
  enabled: false
mdc: true
name: opening
class: cover
---
# Testing foundations

From a business need to evidence for a decision.

<!--
Introduce the two-session route. The original PDF and recording determine the scope. Registration is a separate supporting lab. Ask learners what a useful testing result looks like.
-->

---
name: outcomes
class: lecture
---
# What will you produce?

<v-clicks>

- A small test plan with priorities.
- 20 reasoned cases for one application.
- Evidence, a report and the limits of your conclusion.

</v-clicks>

<!--
Use a two-minute diagnostic: ask for a requirement, a test and a remaining risk. Programming students and junior QA share these outcomes. Assess reasoning rather than English fluency.
-->

---
name: questions
class: lecture
---
# Eight questions guide the course

<v-clicks>

- Why test? Who contributes? How do we investigate?
- Which tools and process help? How do we plan?
- What gets difficult? What will we build together?

</v-clicks>

<!--
Preserve the eight questions from PDF page 3. Invite learners to choose the one they currently find hardest. Return to it in the exit discussion.
-->

---
name: testing
class: lecture
---
# Testing produces information

<v-clicks>

- Inspect requirements and designs before code runs.
- Execute, observe and compare with an oracle.
- A finite set of checks leaves uncertainty.

</v-clicks>

<!--
Distinguish static review from dynamic execution. An oracle supplies the expected result; the implementation supplies the actual observation. Written requirements may omit important user needs. Ask for an accessibility example.
-->

---
name: business
class: lecture
---
# “I want a great app.”

<v-clicks>

- Which customers? What problem?
- Sell goods globally on mobile devices.
- What outcome, budget and deadline?

</v-clicks>

<!--
Recreate the original business conversation from pages 4–8. Do not jump straight to test tools. Ask pairs for two missing decisions about payments, delivery or cancellation.
-->

---
name: requirements
class: lecture
---
# Make one rule testable

<v-clicks>

- Confirm only after payment authorization AND stock reservation.
- A decline must not create a confirmed order.
- Retrying must not duplicate the order or charge.

</v-clicks>

<!--
These are new exercise assumptions, not quotations or universal commerce rules. Ask what should happen if the payment response times out. An unresolved expectation is a question to clarify, not an invented bug.
-->

---
name: design-roles
class: lecture
---
# Before implementation

<v-clicks>

- Analysis: agree on needs and acceptance examples.
- Architecture: define boundaries and tradeoffs.
- UX: design the journey, including recovery.

</v-clicks>

<!--
Ask who performs these contributions in a small team. The recording stresses that role and job title differ. One person can wear several hats; UX is more than placing a button.
-->

---
name: delivery-roles
class: lecture
---
# After the design

<v-clicks>

- Development: implement and review.
- Testing: investigate behavior and risk.
- Delivery, operation, support: keep learning.

</v-clicks>

<!--
Quality has shared contributors, but decisions still need owners. Discuss who investigates a failed check, who restores an environment and who accepts release risk. Avoid presenting QA as the sole quality gatekeeper.
-->

---
name: lifecycle
class: lecture
---
# Test every work product

<div class="lecture-flow"><div>Need<small>Review examples</small></div><div v-click>Design<small>Challenge assumptions</small></div><div v-click>Build<small>Check behavior</small></div><div v-click>Operate<small>Observe outcomes</small></div></div><p class="quiet">Feedback can send us back to any earlier decision.</p>

<!--
Reveal the stages one at a time. At each stage ask what can be tested without waiting for a complete application. Use contradictory requirements, dependency failure, a calculation and an operational alert as examples.
-->

---
name: sequential
class: lecture
---
# Sequential does not mean no feedback

<v-clicks>

- Requirements → design → implementation → delivery.
- Late discovery can make change expensive.
- Early reviews still have a place.

</v-clicks>

<!--
Introduce the waterfall diagram as a model. Avoid claiming that a sequential process guarantees safety or that Agile has no planning. Ask where a misunderstood payment rule would become expensive.
-->

---
name: models
class: lecture
---
# Different ways to evolve

<v-clicks>

- Iterative: improve a solution. Incremental: add usable parts.
- Spiral: organize cycles around risk.
- RAD: rapid development and feedback, often with prototypes.

</v-clicks>

<!--
The original groups several models together. Clarify that iteration, increments and the spiral model are different ideas and may inform the same project. Invite an example of a small usable checkout increment.
-->

---
name: v-model
class: lecture
---
# Connect design with evidence

<div class="scope-stack"><div><strong>Needs</strong><span>↔ Acceptance evidence</span></div><div v-click><strong>System design</strong><span>↔ System and integration checks</span></div><div v-click><strong>Unit design</strong><span>↔ Unit checks</span></div></div><p class="quiet">The V-model helps plan corresponding checks early.</p>

<!--
This is a simplified correspondence, not a complete V-model diagram. Distinguish conformance to specified rules from meeting actual needs. Test design can begin before executable code exists.
-->

---
name: agile
class: lecture
---
# Agile is broader than Scrum

<v-clicks>

- Frequent feedback and usable increments.
- Scrum uses sprints; not every Agile team does.
- Short cycles still need evidence and clear expectations.

</v-clicks>

<!--
Correct the original tendency to equate Agile with a sprint diagram. Reference the Agile principles in the reading. Ask what could be learned from a small release that a long planning document cannot establish.
-->

---
name: pipeline
class: lecture
---
# Build a feedback pipeline

<div class="lecture-flow"><div>Review<small>Static checks</small></div><div v-click>Fast checks<small>Unit · component</small></div><div v-click>Integrate<small>API · dependencies</small></div><div v-click>Release<small>Investigate · observe</small></div></div><p class="quiet">Human investigation and automation complement each other.</p>

<!--
Use the pipeline from PDF page 21 and the recording around 1:02. Include accessibility, exploration, performance and acceptance where risks justify them. Explain CI, continuous delivery and continuous deployment; this drawing is one possible order.
-->

---
name: production
class: lecture
---
# Release is another learning point

<v-clicks>

- Observe user outcomes, errors and recovery.
- Limit exposure; define stop and rollback decisions.
- Control production checks and protect test data.

</v-clicks>

<!--
Explain staged rollout and a canary as ways to gather feedback with limited exposure, not proof of safety. Prefer synthetic or minimized data in ordinary test environments. No production experiment is part of this homework.
-->

---
name: responsibilities
class: lecture
---
# Testing work is wider than scripts

<v-clicks>

- Clarify requirements and investigate the product.
- Prepare data, environments and useful checks.
- Explain results and improve the process.

</v-clicks>

<!--
Preserve the responsibilities on PDF page 23. Ask which task is missing if a team only counts automated scripts. Reports help allocate attention; they are not merely proof that QA was busy.
-->

---
name: skills
class: lecture
---
# Skills grow together

<v-clicks>

- Test design, programming and debugging.
- Domain knowledge, data and infrastructure literacy.
- Communication, coordination and platform expertise.

</v-clicks>

<!--
Preserve specializations across web, backend, mobile, exploratory testing, automation and leadership. A job title is not a universal contract. Have learners name one existing strength and one skill they want to practice.
-->

---
name: environments
class: lecture
---
# An environment needs a description

<v-clicks>

- Dev, test, staging, production: different purposes.
- Record revision, configuration, schema and data.
- Agree who provisions, diagnoses and restores it.

</v-clicks>

<!--
Use the recording’s discussion of environment ownership. A local container is useful but not automatically equivalent to production. Ask which mismatch could explain a test passing locally but failing in staging.
-->

---
name: isolation
class: lecture
---
# Two tests, one shared customer

<div class="two-column"><div><h2>Test A</h2><p>Expects the original address.</p></div><div v-click><h2>Test B</h2><p>Changes that same address.</p></div></div><p v-click class="takeaway">Isolate data, coordinate state, clean up.</p>

<!--
Ask learners to predict the failure before revealing B. Explain why parallel execution exposes interference. Independent records and explicit setup/cleanup are more reliable than adding a fixed delay.
-->

---
name: classification
class: lecture
---
# Classify one axis at a time

<v-clicks>

- Scope: what is inside the test boundary?
- Concern: which behavior or quality matters?
- Method: what knowledge, execution and purpose?

</v-clicks>

<!--
Replace the crowded mind map on page 31 with independent questions. Mention static/dynamic, human/automated, positive/negative, black/white-box and release stage. Alpha and beta concern feedback context, not a universal technical scope.
-->

---
name: levels
class: lecture
---
# Choose a boundary for the question

<div class="scope-stack"><div><strong>Unit</strong><span>A price calculation</span></div><div v-click><strong>Integration</strong><span>Repository + real test database</span></div><div v-click><strong>System / acceptance</strong><span>Defined behavior / agreed needs</span></div></div>

<!--
Component tests may exercise a service with selected dependencies replaced. State real and fake collaborators. Do not prescribe a universal test-pyramid percentage. Ask what an API response alone cannot prove about persistence.
-->

---
name: e2e
class: lecture
---
# Can end-to-end start at an API?

<div class="lecture-flow"><div>API<small>Create order</small></div><div v-click>Payment<small>Sandbox callback</small></div><div v-click>Storage<small>Observe result</small></div></div><p v-click class="takeaway">Yes, for a declared backend journey.</p><p class="quiet">State the boundary and every substituted dependency.</p>

<!--
Answer the closing question at 2:21:34 in the recording. UI is not essential to a declared backend journey. A simulated provider does not establish live-provider compatibility; browser coverage is another question. Terminology differs between teams.
-->

---
name: quality
class: lecture
---
# “It works” needs more questions

<v-clicks>

- Performance: workload, p95, errors, environment.
- Accessibility: keyboard use and understandable feedback.
- Security and reliability: threats, failures, recovery.

</v-clicks>

<!--
Use a hypothetical p95 target below 800 ms at 50 requests/second. It requires agreement and is not a measured course result. Explain percentile and why one automated accessibility scan is not complete assessment.
-->

---
name: negative
class: lecture
---
# A negative case can pass

<v-clicks>

- Invalid input → the agreed rejection or recovery.
- Black-box: select checks from external behavior.
- White-box: use knowledge of internal structure.

</v-clicks>

<!--
Ask whether rejecting an invalid quantity is a failed test. Correct rejection means the test passes. Black-box is not a synonym for manual; white-box is not limited to unit tests. End session one here, then recap with one checkout risk.
-->

---
name: planning
class: lecture
---
# A plan is an agreement

<v-clicks>

- Scope, exclusions, risks and approach.
- People, schedule, environments and data.
- Entry, exit, suspension, resumption and evidence.

</v-clicks>

<!--
Restart with the most important checkout risk. The PDF’s IEEE 829 template is historical context; learners need a useful plan rather than every formal heading. Ask what happens to status if the environment is unavailable.
-->

---
name: risk-plan
class: lecture
---
# A small checkout plan

<v-clicks>

- One market, one currency, synthetic customers.
- Prioritize duplicate charges and lost orders.
- Blocked sandbox → stop, record, recover, smoke-check.

</v-clicks>

<!--
Add owners and explicit exclusions: no real-money operations or other markets. Entry needs a known build and agreed rules. Exit needs usable evidence and reviewed remaining risks, not a deadline alone. Explain impact and likelihood.
-->

---
name: case
class: lecture
---
# A case someone can reproduce

<v-clicks>

- Purpose, requirement, preconditions and input.
- Steps, expected observations and cleanup.
- Declined payment: no confirmed order.

</v-clicks>

<!--
Walk through SHOP-03 from the reading. Use a sandbox decline, inspect the agreed order state and clean up test records. Stock reservation after decline must be clarified. The page message alone cannot establish no charge.
-->

---
name: partitions
class: lecture
---
# Partition before picking values

<v-clicks>

- Quantity accepts whole numbers from 1 through 5.
- Classes: valid, below, above, invalid type or format.
- Representatives: 3, 0, 6, "abc".

</v-clicks>

<!--
Equivalence partitioning assumes selected members are similar for the rule under test. It does not prove every member behaves the same. Ask about fractional input and string coercion; identify the contract before choosing expected results.
-->

---
name: boundary
class: lecture
clicks: 2
---
# One boundary, three observations

<CapacityDiagram :registered="$clicks === 0 ? 9 : $clicks === 1 ? 10 : 11" lang="en" /><p class="quiet">Supporting lab rule: open exactly when registered &lt; capacity.</p>

<!--
Pause at 9, 10 and 11; ask for true/false with a reason before each reveal. Expected: true, false, false. This registration example is newly authored supporting practice. For quantity 1–5, also consider 0/1/2 and 4/5/6.
-->

---
name: decision-table
class: lecture
---
# Expose combinations with a table

<v-click>

| Authorized | Reserved | Confirm? |
| --- | --- | --- |
| No | No | No |
| No | Yes | No |
| Yes | No | No |
| Yes | Yes | Yes |

</v-click>

<!--
Ask for the last column before revealing the table. This is a cause/effect view of a Boolean rule. Timeouts, compensation and retries need additional rules or state modeling. Do not claim the four rows cover the whole checkout process.
-->

---
name: pairwise
class: lecture
---
# Reduce combinations deliberately

<v-clicks>

- 3 browsers × 2 locales × 2 payment methods = 12.
- Six selected rows can cover every pair of values.
- Three-factor interactions can still be missed.

</v-clicks>

<!--
The complete six-row selection is in the reading. Have learners verify browser/locale, browser/payment and locale/payment pairs. Exhaustive here means all combinations of selected factors, not every application state; constraints may invalidate rows.
-->

---
name: exploration
class: lecture
---
# Explore with a mission

<v-clicks>

- 15 minutes: recovery after a checkout timeout.
- Learn, design and execute as evidence emerges.
- Record actions, observations, questions and risks.

</v-clicks>

<!--
Distinguish exploratory testing from random clicking. Error guessing uses experience to suggest cases, such as duplicate submission. A charter provides direction and a timebox while leaving room to learn. Ask what another tester needs to continue.
-->

---
name: checklists
class: lecture
---
# Choose the artifact for the task

<v-clicks>

- Detailed case: repeatable setup and precise observations.
- Checklist: known areas, detail supplied by the tester.
- Charter: a mission for investigation.

</v-clicks>

<!--
Preserve checklists from pages 47–48 while avoiding the suggestion that they only result from laziness. Ask which artifact suits a new colleague, a repeated smoke pass and an uncertain failure investigation.
-->

---
name: suites
class: lecture
---
# Group by purpose and cost

<v-clicks>

- Smoke: is critical behavior usable enough to continue?
- Regression: did other behavior change unexpectedly?
- Performance: under which workload and limits?

</v-clicks>

<!--
Use tags for component, risk, environment and duration. A smoke suite is a selected subset, not proof that the system is sound. Ask which checks should run on every change and which need a separate environment.
-->

---
name: flaky
class: lecture
---
# A rerun does not erase a failure

<v-clicks>

- Investigate state, timing, data and dependencies.
- Keep the first failure and its diagnostic evidence.
- Quarantine needs an owner, risk and repair deadline.

</v-clicks>

<!--
An intermittent failure can come from a test, environment or real product problem. Do not automatically classify it as harmless flakiness. Explain why parallelizing ten thousand tests without isolation can amplify confusion.
-->

---
name: defect
class: lecture
---
# Report what someone can reproduce

<v-clicks>

- Title, revision, environment and preconditions.
- Minimal steps or input; expected versus actual.
- Evidence, impact and a link to the relevant rule.

</v-clicks>

<!--
Use the registration defect as a concise supporting example: input 10/10, expected false, actual true. A possible unavailable-seat offer is an impact hypothesis; production overselling was not observed. Separate failure from suspected root cause.
-->

---
name: severity
class: lecture
---
# Impact and scheduling differ

<v-clicks>

- Severity: how serious are the consequences?
- Priority: when should this be addressed in context?
- Record the reasoning; labels alone are insufficient.

</v-clicks>

<!--
Compare a serious defect in a disabled feature with a prominent typo before a campaign. Do not assert a universal ordering; ask which assumptions affect priority. Product and engineering should discuss the consequences together.
-->

---
name: defect-flow
class: lecture
---
# Fix, confirm, check the neighborhood

<div class="lecture-flow"><div>Report<small>Reproduce</small></div><div v-click>Triage<small>Decide</small></div><div v-click>Fix<small>Change</small></div><div v-click>Confirm<small>Close or reopen</small></div></div><p class="quiet">Confirmation checks the fix. Regression checks affected behavior.</p>

<!--
Workflow names vary. Ask which test confirms the equality fix and which checks other capacity values or invalid inputs. Keeping the new test protects against the same defect returning; it does not cover all risks.
-->

---
name: report
class: lecture
---
# Twenty planned cases. What happened?

<div class="report-grid"><div><strong>14</strong><span>Passed</span></div><div><strong>2</strong><span>Failed</span></div><div><strong>3</strong><span>Blocked</span></div><div><strong>1</strong><span>Not run</span></div></div><p v-click class="takeaway">14/16 executed ≠ 14/20 planned.</p><p class="quiet">Illustrative data. Name the risks, blockers and next action.</p>

<!--
Ask whether 87.5% or 70% is the pass rate; both describe different denominators. Neither says whether checkout’s critical risks are covered. Include build, environment, date and status definitions. Blocked is never silently passed.
-->

---
name: test-value
class: lecture
---
# Always green can still be valuable

<v-clicks>

- Check the risk and the strength of assertions.
- Review redundancy, runtime and diagnostic value.
- A representative fault can expose a weak check.

</v-clicks>

<!--
Explicitly clarify the suggestion around 2:07 in the recording that always-passing tests may be removed. Pass frequency alone cannot determine value. Mutation testing is an optional later technique, not a required tool setup today.
-->

---
name: tools
class: lecture
---
# Start with the job, then the tool

<v-clicks>

- Track issues, cases and evidence.
- Model ideas, prepare data, inspect interfaces.
- Measure load and automate useful checks.

</v-clicks>

<!--
Preserve the categories in pages 53–54: trackers, case management, reports, mind maps, prototypes, generators, frontend and backend tools. Historical product screenshots are not current recommendations. The recording proposes a demo but does not deliver a full tool walkthrough.
-->

---
name: platforms
class: lecture
---
# A platform matrix has limits

<v-clicks>

- Chromium, Firefox and WebKit are distinct engines.
- Devices, keyboards and assistive technology add variation.
- Prioritize using users, product risks and evidence.

</v-clicks>

<!--
Correct any implication that modern browsers are all Chromium. Engine checks do not establish coverage of every physical device. Use official Playwright browser documentation linked in the reading; do not turn this into a tool installation lesson.
-->

---
name: resilience
class: lecture
---
# Investigate a controlled failure

<v-clicks>

- In an authorized test environment, interrupt a dependency.
- Define expected recovery, observation and a stop condition.
- Use meaningful synthetic data and record limitations.

</v-clicks>

<!--
Preserve the recording’s resilience/fault-injection discussion as a conceptual introduction. Example: payment sandbox unavailable, no duplicate order after retry. No public-service disruption is assigned. Production-like means relevant structure and behavior, not copied personal data.
-->

---
name: course
class: lecture
---
# One application, many questions

<v-clicks>

- Static checks → units → components → integrations.
- API and UI journeys, contracts, visual checks and reports.
- Performance, CI and later mobile / LLM extensions.

</v-clicks>

<!--
Preserve the evolving-application idea from page 56. Later modules and extensions remain planned; this slide is not a claim that they have been built. Each new technique should answer a question about the same product.
-->

---
name: homework
class: lecture
---
# Main assignment: 20 cases

<v-clicks>

- Choose an application and declare scope and three risks.
- Design 20 distinct cases; map them to rules and techniques.
- Report actual evidence, unknowns and the next investigation.

</v-clicks>

<!--
Retain the original homework on PDF page 37. Use an owned, local or permitted application. The reading specifies positive/negative cases, boundaries, an interaction and a quality attribute. Grade scope 2, selection 3, detail 2, honest reporting 2, priorities 1. Designed-only cases are not run.
-->

---
name: lab
class: lecture
---
# Supporting lab: the last seat

<v-clicks>

- Predict 9 / 10 / 11 using the rule.
- Capture a failing test, fix, rerun and report.
- Explain what the pure function does not prove.

</v-clicks>
<CourseDestination>Open the 35-minute lab →</CourseDestination>

<!--
The registration exercise is newly authored supporting practice, not an original source example. Allow 5 minutes prediction, 10 failure, 10 fix, 10 report. It has a separate ten-point rubric and does not replace the main 20-case assignment. Keep the deliberate starter defect.
-->

---
name: exit
class: lecture
---
# Explain the evidence and its limits

<v-clicks>

- Which requirement and test boundary did you choose?
- How can a negative case pass? What is confirmation?
- What do you report when the environment blocks execution?

</v-clicks>

<!--
Return to the diagnostic and eight questions. Expect a stated oracle, real/fake boundaries, correct rejection, confirmation versus regression and honest blocked status. Ask learners to justify one next check using risk.
-->

---
name: sources
class: lecture
---
# Continue from the sources

<p>Original 56-page PDF + timestamped 2021 recording.</p><p>Full reading, source map, glossary and assignment.</p><CourseDestination page="lessons/foundations-sources/">See sources and editorial decisions →</CourseDestination>

<!--
Be transparent: the full automatic transcript and all rendered PDF pages were reviewed, plus two video frames, not continuous audiovisual viewing. New worked examples and corrections are identified in the source map. Collect timing and translation feedback during the first classroom trial.
-->
