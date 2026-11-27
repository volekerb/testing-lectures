import { evaluate } from './contract.mjs';
const target = process.argv.includes('--solution') ? 'solution' : 'starter';
const { isRegistrationOpen } = await import(`./${target}/registration.mjs`);
const results = evaluate(isRegistrationOpen);
for (const { registered, capacity, expected, actual, error, passed } of results) {
  console.log(`${passed ? 'PASS' : 'FAIL'} registered=${registered}, capacity=${capacity}: expected ${expected}, received ${error ?? actual}`);
}
const failed = results.filter(result => !result.passed).length;
console.log(`${results.length - failed}/${results.length} checks passed.`);
if (failed) console.log('The starter is intentionally incomplete. Add a failing boundary test, then fix the implementation.');
process.exitCode = failed ? 1 : 0;
