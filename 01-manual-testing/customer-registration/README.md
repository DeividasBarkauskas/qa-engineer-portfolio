# QA Mentoring Exercise — Customer Registration

## About this exercise

This project is based on a practical QA exercise I completed while being mentored by a **QA Team Lead** as I take on more QA responsibilities in my current role.

The goal was to take a set of Acceptance Criteria and work through a basic QA flow:

**Acceptance Criteria → Test Scenarios → Test Cases → Positive/Negative coverage → RTM**

For the public portfolio version, company-specific names and identifiers were generalized and all test data is synthetic. I also cleaned up some duplicated test cases based on what I learned during the review of the exercise.

## What I practiced

- understanding Acceptance Criteria before testing;
- creating Test Scenarios and more detailed Test Cases;
- writing both positive and negative cases;
- checking requirement coverage with an RTM;
- thinking about which tests are actually needed instead of duplicating the same test many times;
- using Boundary Value Analysis (BVA) for minimum/maximum values;
- using Equivalence Partitioning (EP) to choose representative valid and invalid inputs;
- considering higher-risk areas such as access restrictions and data integrity.

## Simple examples

### Boundary Value Analysis

For this portfolio version, a customer can have **1–10 MSISDNs**. Instead of testing every possible quantity, I focus on the boundaries — for example `0`, `1`, `10` and `11` — and values close to them where useful.

### Equivalence Partitioning

For an MSISDN input, I do not need to try every possible invalid value. I can test representative groups, for example:

- valid numeric MSISDN;
- empty value;
- invalid characters such as `ABC$$$`.

### Test optimization

If three user roles have the same steps and the same expected result, I can use the roles as different test data in one test case instead of maintaining three almost identical cases.

## Project files

- [Acceptance Criteria](./requirements.md)
- [Test Scenarios](./test-scenarios.md)
- [Test Cases](./test-cases.md)
- [Requirement Traceability Matrix](./rtm.md)
- [Test Design Notes](./test-design.md)

## Note

This is a learning/mentoring exercise, not a claim that these test cases were executed against a public production application. The purpose is to show how I structure and think about manual testing.
