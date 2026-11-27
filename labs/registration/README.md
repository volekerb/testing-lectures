# The last seat

[Русская версия](README.ru.md)

Allow registration only when `registered < capacity`. Inputs are safe integers:
`registered >= 0`, `capacity >= 1`. Invalid inputs throw `TypeError`. A count already
above capacity is valid input and must return `false`. This function makes a decision;
it does not reserve a seat, update a database, or handle concurrent requests.

**Prerequisite:** Node.js 24. No package installation, API key, or service required.
Run these commands from this directory (including after extracting the lab download).

1. Run `node --test starter/registration.test.mjs`. Both starter tests pass.
2. Write the expected results for 9, 10, and 11 registrations at capacity 10.
3. Add a test for exactly 10 registrations. Run the same command and save the failure.
4. Make the smallest fix in `starter/registration.mjs`. Run the tests again.
5. Run `node check.mjs`. All six contract examples should now pass.
6. Submit your new test, code change, before/after output, a bug report, and two risks
   this function test cannot cover. Explain which extra test you would prioritize.

`node check.mjs` intentionally fails on the untouched starter. A green initial suite
is evidence that those two examples work, not proof that the implementation is correct.

Optional: test invalid inputs; try a capacity other than 10; explain why two concurrent
requests could both see the same last seat. Do not implement a database for this lab.

The course website has a guided walkthrough. Repository maintainers can also run
`node check.mjs --solution`; the downloadable starter excludes the reference solution.

## Bug report template

- **Title:** behavior + triggering condition.
- **Environment:** Node version and repository revision (or lab download date).
- **Steps/input:** minimal reproducible call.
- **Expected:** result and the rule that justifies it.
- **Actual:** observed result, with test output.
- **Impact:** what could happen to a learner/customer; avoid claiming an untested production outcome.

## Self-review (10 points)

| Evidence | Points |
| --- | --- |
| Correct expected results for 9, 10, 11, with the rule | 2 |
| Boundary test demonstrably fails before the fix | 2 |
| Minimal fix; own tests and contract checks pass | 2 |
| Reproducible bug report with impact | 2 |
| Two untested risks and a justified next check | 2 |

The rubric is for discussion and self-review; no work is uploaded by this lab.
