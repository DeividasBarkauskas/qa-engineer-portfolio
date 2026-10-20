# Manual Testing Project — Customer Registration

## Objective

This project demonstrates a structured manual QA approach for a web-based prepaid customer-registration feature. It starts from acceptance criteria and traces them through test scenarios, test cases and an RTM.

The original exercise was reviewed during hands-on QA mentoring. For this public portfolio version, the material has been cleaned up, generalized and improved based on the review: duplicate coverage was reduced, expected results were made more explicit, and test-design techniques such as **Boundary Value Analysis** and **Equivalence Partitioning** were applied.

## Scope

The feature allows an authorized user to:
- open a prepaid customer-registration form;
- select Residential (RES) or Business (BUS) customer type;
- select a document type and enter a document number;
- enter customer-specific information;
- enter one or more prepaid MSISDNs;
- submit a valid registration.

The suite also covers authorization restrictions, invalid input, incomplete forms, customer-type field separation and MSISDN quantity boundaries.

## Test design approach

### Equivalence Partitioning (EP)
Inputs are divided into representative valid and invalid groups rather than testing every possible value. Examples include valid/invalid MSISDN formats and valid/invalid document-number input.

### Boundary Value Analysis (BVA)
For portfolio purposes, the requirement is defined as **1–10 MSISDNs per customer**. Relevant boundary-focused tests include:
- `0` — invalid, below minimum;
- `1` — valid minimum;
- `9` — valid value near maximum;
- `10` — valid maximum;
- `11` — invalid, above maximum.

In a real project, the exact minimum/maximum would first be clarified with Product/Business before finalizing these cases.

### Risk-based coverage
Special attention is given to:
- authorization/access control;
- mandatory customer information;
- data integrity when adding multiple MSISDNs;
- successful and blocked submission paths.

### Test optimization
Where the workflow is identical for several authorized roles, roles are treated as test data for a data-driven test instead of duplicating the same test case multiple times.

## Deliverables

- [Acceptance Criteria](./requirements.md)
- [Test Scenarios](./test-scenarios.md)
- [Detailed Test Cases](./test-cases.md)
- [Requirement Traceability Matrix](./rtm.md)
- [Test Design Notes](./test-design.md)

A formatted Excel version of the same QA artefacts is maintained separately for spreadsheet-style review.

## Notes

All customer names and values used in this portfolio are synthetic. Product/system names, roles and routes have been generalized. No production credentials, URLs, real customer records or proprietary source code are included.
