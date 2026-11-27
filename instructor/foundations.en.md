# Facilitator guide: testing foundations

[Русский](foundations.ru.md)

Audience: programming students and junior QA engineers. Prerequisites: functions,
conditions, Boolean values. Core outcomes are the same for both audiences; spend
extra time tracing the JavaScript assertion for learners new to automation.

## Run the session

The 20-slide lesson has about 42 minutes of prompts plus 3 minutes of discussion or
transition buffer. Follow it with the 35-minute lab (80 minutes total).

| Slides | Activity | Facilitation cue |
| --- | --- | --- |
| 1-2 | Elicit assumptions; introduce outcomes | Record what “green tests” means to learners |
| 3-6 | Predict 9/10/11; define the oracle | Pause before each seat-count reveal |
| 7-11 | Find the mismatch; write and fix a test | Show the right assertion failure before editing code |
| 12-16 | Report, scope, concurrency, risk, lifecycle | Separate observed facts from possible impact |
| 17-20 | Explain the lab; exit questions | Return to the opening assumptions |

Speaker notes in both decks contain prompts and suggested timings. Right arrow/Space
reveals; Left arrow reverses. The language footer preserves the slide number but
starts its reveals again, useful when restating an idea. The lesson reading is the
static alternative. Do not rely on animation to communicate a unique fact.

## Lab timing and evaluation

5 minutes predict/run, 10 capture failure, 10 fix/check, 10 report/discuss. The starter
suite deliberately passes; the contract checker deliberately fails equality until
the student fixes it. Do not “repair” this teaching fixture in the course source.

Each of five rubric criteria is worth 2 points: correct predictions and oracle;
meaningful failing test; minimal fix and passing checks; reproducible report; two
untested risks and a justified next check. Accept equivalent test names and code.
The reasoning must show why the expected value is false, not merely copy the answer.

Ask stronger learners to propose an atomic-reservation test. Keep databases and
concurrency implementation out of this first lab. Do not grade English fluency;
accept the report in either course language.

## Pilot acceptance checklist

- Same learning outcomes, contract, test inputs, and rubric in both languages.
- Home → lesson → slides → lab → walkthrough works with the deployment base path.
- Language switching preserves the topic, and the slide switch preserves its number.
- All 20 slides are readable at projection size; staged content stays within the slide.
- Keyboard, mobile reading, light/dark appearance, and reduced motion are reviewed.
- ZIP extraction works offline after Node is installed; no `npm install` is needed.
- New boundary test fails on the starter and passes after the minimal change.
- Existing archives remain accessible; planned lessons are not represented as published.

For the first classroom trial, record where learners hesitate, actual lab completion
time, misconceptions about green tests, and translation wording that needs revision.
Use those observations before migrating the next lecture or adding LLM material.
