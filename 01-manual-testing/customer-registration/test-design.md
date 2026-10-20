# Test Design Notes

## Equivalence Partitioning

Equivalence Partitioning reduces unnecessary repetition by dividing input into groups that should behave similarly and selecting representative values from each group.

Examples in this project:

| Input | Valid partition | Invalid partition |
|---|---|---|
| MSISDN format | Expected numeric format | Alphabetic/special-character value such as `ABC$$$` |
| Document number | Supported non-empty format | Empty or invalid-symbol input |
| Customer type | RES or BUS | No valid selection |

## Boundary Value Analysis

For the portfolio requirement of **1–10 MSISDNs**, the important quantity boundaries are:

| Value | Expected classification | Reason |
|---:|---|---|
| 0 | Invalid | Immediately below minimum |
| 1 | Valid | Minimum |
| 2 | Valid | Immediately above minimum |
| 9 | Valid | Immediately below maximum |
| 10 | Valid | Maximum |
| 11 | Invalid | Immediately above maximum |

The detailed suite uses the most useful representatives while documenting the complete boundary model above.

## Authorization testing

Access is tested from both sides:
1. an authorized user can discover and open the feature;
2. a restricted user cannot see it;
3. direct navigation must not bypass authorization.

This avoids relying only on UI visibility as an access-control check.

## Positive and negative testing

Positive cases confirm that supported workflows succeed. Negative cases deliberately exercise missing input, invalid formats, unauthorized access and out-of-range quantities to verify that the system fails safely and provides useful feedback.

## Test optimization

If several roles follow the exact same workflow and expected result, role is treated as **test data** in a data-driven case. Separate test cases are kept when permissions or expected behavior differ.

## Risk-based thinking

The highest-risk areas in this feature are considered to be:
- unauthorized access;
- incorrect customer-type data handling;
- loss/overwrite of MSISDN values;
- invalid data reaching submission;
- valid registrations being blocked.

These risks receive explicit positive and/or negative coverage.
