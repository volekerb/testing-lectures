---
theme: default
title: "What does a passing test prove?"
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
<p class="eyebrow">Testing foundations</p>

# A passing test. What does it prove?

One rule. One boundary. Evidence you can explain.
<p class="quiet">Use → or Space to reveal the next idea.</p>

<!--
1 min. Ask: if a build is green, what do you know? Collect two answers without correcting them yet. Reading and lab links are in the footer and final slides.
-->

---
name: outcomes

---
# By the end, you can…

<v-clicks>

- Turn a requirement into an expected result.
- Choose the example a happy path misses.
- Capture a failure, make a fix, keep the test.
- Explain what you have **not** established.

</v-clicks>

<!--
1 min. Translate outcomes into concrete artifacts: prediction table, regression test, bug report, bounded release statement.
-->

---
name: predict
clicks: 2
---
# Ten seats. Can one more person join?

<CapacityDiagram :registered="$clicks === 0 ? 9 : $clicks === 1 ? 10 : 11" lang="en" />
<p class="quiet">Predict before each reveal. What rule are you using?</p>

<!--
3 min. Stop at 9, then advance to 10, then 11. Ask students for open/closed and a reason. If they ask about a waitlist, praise the question by clarifying that the next slide defines the exercise rule.
-->

---
name: rule

---
# Make the rule explicit

<div class="big-rule">Registration is open exactly when<br /><strong>registered &lt; capacity</strong>.</div>
<v-click>

Safe integers. `registered >= 0`. `capacity >= 1`.

</v-click>
<p v-click class="quiet">This function decides. It does not reserve or save a seat.</p>

<!--
2 min. State the contract. Invalid inputs throw TypeError. An already-over-capacity count is valid and returns false. Do not generalize this exercise rule to every booking product.
-->

---
name: oracle

---
# Where does “expected” come from?

<div class="evidence-flow"><div>The rule<small>our oracle</small></div><span>→</span><div>Expected<small>registration closed</small></div><span>↔</span><div>Observed<small>run the code</small></div></div>
<p v-click class="takeaway">A test oracle gives us a reason to expect an answer.</p>
<p v-click class="quiet">An unclear rule needs a question before it needs a bug report.</p>

<!--
3 min. Ask for other oracles: specification, independent calculation, domain expert. Explain that copying the implementation into the expected result can repeat its defect.
-->

---
name: boundary

---
# Three examples, one boundary

| Registered | Expected | Why? |
| --- | --- | --- |
| 9 | `true` | One seat remains |
| 10 | `false` | No seats remain |
| 11 | `false` | Already over capacity |

<p v-click class="takeaway">Below. Equal. Above.</p>
<p v-click class="quiet">Boundary-value analysis gives each example a job.</p>

<!--
2 min. Ask why 7 adds less value than 10 for this defect. Clarify that boundary analysis is a selection technique, not a guarantee of completeness.
-->

---
name: green-suite

---
# The tests pass. The defect remains.

```js
isRegistrationOpen(9, 10)  // true  ✓
isRegistrationOpen(11, 10) // false ✓
```
<v-click>

The implementation:

```js
return registered <= capacity;
```

</v-click>
<p v-click class="takeaway">What happens at exactly 10?</p>

<!--
3 min. Give learners time to inspect the comparison. Ask someone to trace equality aloud. Separate green suite from correctness of untested behavior.
-->

---
name: mismatch

---
# Name the mismatch

<div class="two-column"><div><h2>Expected</h2><p class="green">false</p><p>No seats remain.</p></div><div v-click><h2>Actual</h2><p class="red">true</p><p>The code accepts equality.</p></div></div>
<p v-click class="takeaway">Input: <code>isRegistrationOpen(10, 10)</code></p>

<!--
2 min. The observed Boolean is a fact; production overselling is a possible consequence requiring more system context.
-->

---
name: test

---
# Turn the observation into a test

```js
test('closes registration when the event is full', () => {
  const registered = 10;
  const capacity = 10;

  const actual = isRegistrationOpen(registered, capacity);

  assert.equal(actual, false);
});
```
<p v-click class="quiet">Given the state → when we act → then compare with the rule.</p>

<!--
3 min. Explain imports are in the lab starter: node:test and node:assert/strict. Trace setup, action, assertion. Keep code identical in both languages.
-->

---
name: failure

---
# First, see the right failure

```text
AssertionError: Expected values to be strictly equal:
true !== false
```
<v-clicks>

- The test ran and reached the assertion.
- The observed Boolean disagreed with the rule.
- A broken import would be a different problem.

</v-clicks>

<!--
2 min. Explain output varies slightly by Node version; the expected/actual mismatch is the key evidence. Never change the oracle just to make a failure disappear.
-->

---
name: fix

---
# A small fix. A lasting check.

```diff
-return registered <= capacity;
+return registered < capacity;
```
<div class="evidence-flow"><div v-click><strong class="red">Fail</strong><small>expose equality</small></div><span>→</span><div v-click><strong>Fix</strong><small>use the rule</small></div><span>→</span><div v-click><strong>Pass</strong><small>keep the test</small></div></div>
<p class="quiet">Run the existing checks too. Try another capacity.</p>

<!--
2 min. Keeping the test protects against this particular regression. This is a regression-fix exercise, not a full treatment of TDD.
-->

---
name: report

---
# Make the defect reproducible

<v-clicks>

- **Title:** full event still allows registration.
- **Input:** `isRegistrationOpen(10, 10)`.
- **Expected / actual:** `false` / `true`, with output.
- **Context:** Node version and source revision.
- **Impact:** a caller could offer a seat that is unavailable.

</v-clicks>

<!--
2 min. Ask what is missing from “registration is broken”. Distinguish possible impact from an observed production incident.
-->

---
name: scope

---
# Different scopes, different questions

<div class="scope-stack"><div><strong>Function</strong><span>Does the boundary rule hold?</span></div><div v-click><strong>Integration</strong><span>Is the reservation persisted correctly?</span></div><div v-click><strong>End-to-end</strong><span>Can a person complete the journey?</span></div></div>
<p v-click class="quiet">Choose the smallest useful scope for the risk.</p>

<!--
2 min. The labels are less important than which dependencies are real and what evidence the test produces. Avoid promising a universal test pyramid ratio.
-->

---
name: concurrency

---
# One seat. Two simultaneous requests.

<div class="two-column"><div><h2>Request A</h2><p>Reads <strong>9 / 10</strong></p><p v-click>Registration open.</p></div><div><h2>Request B</h2><p>Also reads <strong>9 / 10</strong></p><p v-click>Registration open.</p></div></div>
<p v-click class="takeaway">A correct decision is not an atomic reservation.</p>

<!--
3 min. Ask students to describe the operation that must be tested next. Expected scenario: exactly one of two concurrent reservation attempts succeeds, final persisted count stays within capacity. No database implementation today.
-->

---
name: risk

---
# What would you check next?

<v-clicks>

- Two people competing for the last seat?
- A stale participant count?
- A “full” message unusable with a keyboard?

</v-clicks>
<p v-click class="takeaway">Consider impact, likelihood, and the cost of useful evidence.</p>

<!--
2 min. Give pairs 30 seconds to choose one next test and justify it. Different answers can be reasonable with different product assumptions.
-->

---
name: lifecycle

---
# Testing starts before the first assertion

<v-clicks>

- **Plan:** clarify the rule and examples.
- **Build:** review, explore, automate a useful check.
- **Integrate:** repeat checks and investigate failures.
- **Operate:** observe behavior and revisit assumptions.

</v-clicks>

<!--
2 min. Reconnect to the original course theme of testing throughout the lifecycle. Automated checks are one tool inside a broader activity.
-->

---
name: lab

---
# Your lab: the last seat

1. Predict 9, 10, 11. Run the green starter.
2. Add a boundary test. Capture its failure.
3. Make the smallest fix. Rerun the checks.
4. Report the defect and two untested risks.

<CourseDestination>Open the 35-minute lab →</CourseDestination>
<p class="quiet">Node.js 24. No packages or external services required.</p>

<!--
1 min. Confirm learners can download and extract the starter. Explain that node check.mjs intentionally fails until the boundary is fixed. The separate lab runs for 35 minutes after this 45-minute lesson.
-->

---
name: evidence

---
# Bring evidence, not just a green screenshot

<v-clicks>

- Your prediction and its oracle.
- A failure that detects the defect.
- The fix and passing checks.
- A reproducible report and a justified next test.

</v-clicks>
<p class="quiet">The lab rubric rewards the reasoning as well as the code.</p>

<!--
1 min. Show the five rubric rows in the reading if requested. No upload or account is required. Instructors choose how to collect work.
-->

---
name: exit

---
# Before you leave

<v-clicks>

- Two tests pass. What can you conclude?
- Why is 10 more useful than another 7 here?
- Does the fix make concurrent reservation safe?

</v-clicks>
<p v-click class="takeaway">Name the evidence. Name its limits.</p>

<!--
3 min. Expected answers: only covered observations; equality distinguishes the operators; no, reservation is outside this function. Return to answers collected on slide one.
-->

---
name: conclusion
class: cover conclusion
---
<p class="eyebrow">A useful conclusion</p>

# “We have evidence that…”

…under these conditions.

…we have not yet checked this risk.

…next, I would test this because…
<CourseDestination>Start the practical lab →</CourseDestination>

<!--
2 min. Ask each learner to complete the statement once. Then move to the lab. The static lesson includes all explanations for self-study or reduced-motion use.
-->
